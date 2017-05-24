const http = require('http')
const express = require('express')
const path = require('path')
const { expresslogger, logger } = require('./common/logger')
const loggerConstants = require('./constants/logger-constants')

// express
const app = express()

app.use(expresslogger)
logger.log(loggerConstants.LOG_LEVEL_VERBOSE, 'Winston logger started')

app.use(express.static(path.resolve(__dirname, '../build/')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

// http
const portNum = process.env.PORT
const server = http.createServer(app)

const startServer = (portToUse) => {
  const environment = app.get('env')
  return server.listen(portToUse, () => {
    const { port } = server.address()
    logger.log(loggerConstants.LOG_LEVEL_INFO, `Environment ${environment}`)
    logger.log(loggerConstants.LOG_LEVEL_VERBOSE, `Server listening on port ${port}`)
  })
}

const stopServer = () => {
  server.close()
  process.exit()
}

// process
process.on('SIGINT', () => {
  logger.log(loggerConstants.LOG_LEVEL_DEBUG, 'SIGINT')
  stopServer()
})
process.on('exit', () => {
  logger.log(loggerConstants.LOG_LEVEL_VERBOSE, 'Server stopped')
  stopServer()
})
process.on('uncaughtException', () => {
  logger.log(loggerConstants.LOG_LEVEL_ERROR, 'Uncaught Exception')
  stopServer()
})
process.on('SIGURS2', () => {
  logger.log(loggerConstants.LOG_LEVEL_ERROR, 'Uncaught Exception')
  stopServer()
})

startServer(portNum)

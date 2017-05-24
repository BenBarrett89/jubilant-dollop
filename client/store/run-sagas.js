export default function (sagaMiddleware) {
  // services
  // const randomService = require('../services/random-service').init()

  // sagas
  const initSagas = require('../sagas/init-sagas').init()
  const initWatches = require('../sagas/init-watches').init(initSagas)
  sagaMiddleware.run(initWatches)
}

export default function (sagaMiddleware, db) {
  // services
  const charactersService = require('../services/characters-service').init(db)

  // sagas
  const initSagas = require('../sagas/init-sagas').init()
  const initWatches = require('../sagas/init-watches').init(initSagas)
  sagaMiddleware.run(initWatches)
  const characterSages = require('../sagas/characters-sagas').init(charactersService)
  const characterWatches = require('../sagas/characters-watches').init(characterSages)
  sagaMiddleware.run(characterWatches)
}

import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { END } from 'redux-saga'
import { init } from '../actions/init-actions'

import db from '../database/dexie'

import RootReducer from './reducers'

import runSagas from './run-sagas'

// will later use this function to inspect environment variables to configure store without devtools
export function configureStore (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(RootReducer, initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(browserHistory)
      )
    )
  )

  db.open().catch(error => console.log(`Error opening Dexie database: ${error}`))

  runSagas(sagaMiddleware, db)

  // run the init saga at application start time
  store.dispatch(init())

  store.close = () => store.dispatch(END)

  return store
}

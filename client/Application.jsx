import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { routes } from './routes'
import { configureStore } from './store/store'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>{routes}</Router>
      </Provider>
    )
  }
}

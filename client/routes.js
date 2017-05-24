import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App.jsx'
import { CharactersContainer } from './containers/CharactersContainer.jsx'

import Home from './components/Home.jsx'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/characters' component={CharactersContainer} />
  </Route>
)

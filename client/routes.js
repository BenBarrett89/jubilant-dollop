import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App.jsx'
import { IntroToD3Container } from './containers/IntroToD3Container.jsx'
import { BarChartsContainer } from './containers/BarChartsContainer.jsx'
import { BarChartsSVGContainer } from './containers/BarChartsSVGContainer.jsx'

import Home from './components/Home.jsx'

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/introtod3' component={IntroToD3Container} />
    <Route path='/barcharts' component={BarChartsContainer} />
    <Route path='/barchartssvg' component={BarChartsSVGContainer} />
  </Route>
)

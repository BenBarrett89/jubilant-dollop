import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import data from '../reducers/data-reducer'

export default combineReducers({
  routing: routerReducer,
  data
})

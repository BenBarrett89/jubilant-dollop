import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import characters from '../reducers/characters-reducer'

export default combineReducers({
  routing: routerReducer,
  characters
})

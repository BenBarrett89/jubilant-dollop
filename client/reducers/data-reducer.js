import { typeDecrementValue, typeIncrementValue, typeResetData } from '../constants/action-constants'

const initialState = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0}

const decrement = (state, index) => Object.assign({}, state, --state[index])
const increment = (state, index) => Object.assign({}, state, ++state[index])

export default function (state = initialState, action) {
  switch (action.type) {
    case typeDecrementValue:
      return decrement(state, action.index)
    case typeIncrementValue:
      return increment(state, action.index)
    case typeResetData:
      return {0: 0, 1: 0, 2: 0, 3: 0, 4: 0}
    default:
      return state
  }
}

import { typeSetCharacters, typeSetResetFormFlag } from '../constants/action-constants'

const initialState = {
  characters: [],
  resetForm: false
}

const setCharacters = (state, characters) => Object.assign({}, state, {characters})
const setResetFormFlag = (state, flag) => Object.assign({}, state, {resetForm: flag})

export default function (state = initialState, action) {
  switch (action.type) {
    case typeSetCharacters:
      return setCharacters(state, action.characters)
    case typeSetResetFormFlag:
      return setResetFormFlag(state, action.flag)
    default:
      return state
  }
}

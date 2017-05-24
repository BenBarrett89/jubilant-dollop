import { typeDecrementValue, typeIncrementValue, typeResetData } from '../constants/action-constants'

export function decrementValue (index) {
  return {
    type: typeDecrementValue,
    index
  }
}

export function incrementValue (index) {
  return {
    type: typeIncrementValue,
    index
  }
}

export function resetData () {
  return {
    type: typeResetData
  }
}

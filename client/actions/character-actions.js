import { typeDeleteCharacter, typeLoadCharacters, typePutCharacter, typeSetResetFormFlag, typeSetCharacters } from '../constants/action-constants'

export function deleteCharacter (id) {
  return {
    type: typeDeleteCharacter,
    id
  }
}

export function loadCharacters () {
  return {
    type: typeLoadCharacters
  }
}

export function putCharacter (character) {
  return {
    type: typePutCharacter,
    character
  }
}

export function setCharacters (characters) {
  return {
    type: typeSetCharacters,
    characters
  }
}

export function setResetFormFlag (flag) {
  return {
    type: typeSetResetFormFlag,
    flag
  }
}

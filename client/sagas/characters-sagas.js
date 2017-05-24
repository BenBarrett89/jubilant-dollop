import { call, put } from 'redux-saga/effects'
import { loadCharacters, setCharacters, setResetFormFlag } from '../actions/character-actions'

const domainSagas = (charactersService) => {
  function* deleteCharacterSaga (action) {
    try {
      yield call(charactersService.deleteCharacter, action.id)
      yield put(loadCharacters())
    } catch (error) {
      console.log(error)
    }
  }

  function* loadCharactersSaga () {
    try {
      const characters = yield call(charactersService.loadCharacters)
      yield put(setCharacters(characters))
    } catch (error) {
      console.log(error)
    }
  }

  function* putCharacterSaga (action) {
    try {
      yield call(charactersService.putCharacter, action.character)
      yield put(loadCharacters())
      yield put(setResetFormFlag(true))
    } catch (error) {
      console.log(error)
    }
  }

  return {
    deleteCharacterSaga,
    loadCharactersSaga,
    putCharacterSaga
  }
}

module.exports = {
  init: domainSagas
}

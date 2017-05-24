import { takeEvery } from 'redux-saga/effects'
import { typeDeleteCharacter, typeLoadCharacters, typePutCharacter } from '../constants/action-constants'

const characterWatches = characterSagas => {
  function* watchDeleteCharacter () {
    yield takeEvery(typeDeleteCharacter, characterSagas.deleteCharacterSaga)
  }

  function* watchLoadCharacters () {
    yield takeEvery(typeLoadCharacters, characterSagas.loadCharactersSaga)
  }

  function* watchPutCharacter () {
    yield takeEvery(typePutCharacter, characterSagas.putCharacterSaga)
  }

  function* root () {
    yield [
      watchDeleteCharacter(),
      watchLoadCharacters(),
      watchPutCharacter()
    ]
  }

  return root
}

module.exports = {
  init: characterWatches
}

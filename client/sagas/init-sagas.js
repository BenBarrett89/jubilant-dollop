// import { put } from 'redux-saga/effects'
// import { loadCharacters } from '../actions/character-actions'

const initSagas = () => {
  function* initSaga () {
    // yield put(loadCharacters())
    console.log('Its alive!')
  }

  return {
    initSaga
  }
}

module.exports = {
  init: initSagas
}

import { takeEvery } from 'redux-saga/effects'
import { typeInit } from '../constants/action-constants'

const initWatches = initSagas => {
  function* watchInit () {
    yield takeEvery(typeInit, initSagas.initSaga)
  }

  function* root () {
    yield [
      watchInit()
    ]
  }

  return root
}

module.exports = {
  init: initWatches
}

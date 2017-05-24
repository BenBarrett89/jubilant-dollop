import { takeEvery } from 'redux-saga/effects'
import { typeDeleteDomain, typeLoadDomains, typePostDomain, typeRandom } from '../constants/action-constants'

const domainWatches = domainSagas => {
  function* watchDeleteDomain () {
    yield takeEvery(typeDeleteDomain, domainSagas.deleteDomainSaga)
  }

  function* watchLoadDomains () {
    yield takeEvery(typeLoadDomains, domainSagas.loadDomainsSaga)
  }

  function* watchPostDomain () {
    yield takeEvery(typePostDomain, domainSagas.postDomainSaga)
  }

  function* watchRandom () {
    yield takeEvery(typeRandom, domainSagas.randomSaga)
  }

  function* root () {
    yield [
      watchDeleteDomain(),
      watchLoadDomains(),
      watchPostDomain(),
      watchRandom()
    ]
  }

  return root
}

module.exports = {
  init: domainWatches
}

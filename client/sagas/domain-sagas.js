import { call, put } from 'redux-saga/effects'
import { decrement, increment, loadDomains, setDomains } from '../actions/domain-actions'

const domainSagas = (randomService, domainService) => {
  function* deleteDomainSaga (action) {
    try {
      yield call(domainService.deleteDomain, action.index)
      yield put(loadDomains())
    } catch (error) {
      console.log(error)
    }
  }

  function* loadDomainsSaga () {
    try {
      const domains = yield call(domainService.loadDomains)
      yield put(setDomains(domains))
    } catch (error) {
      console.log(error)
    }
  }

  function* postDomainSaga (action) {
    try {
      yield call(domainService.postDomain, action.domain)
      yield put(loadDomains())
    } catch (error) {
      console.log(error)
    }
  }

  function* randomSaga () {
    const value = yield call(() => randomService.random() > 0.5)
    if (value) {
      yield put(increment())
    } else {
      yield put(decrement())
    }
  }

  return {
    deleteDomainSaga,
    loadDomainsSaga,
    postDomainSaga,
    randomSaga
  }
}

module.exports = {
  init: domainSagas
}

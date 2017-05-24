import { typeDecrement, typeDeleteDomain, typeIncrement, typeLoadDomains, typePostDomain, typeRandom, typeReset, typeSetDomains } from '../constants/action-constants'

export function decrement () {
  return {
    type: typeDecrement
  }
}

export function deleteDomain (index) {
  return {
    type: typeDeleteDomain,
    index
  }
}

export function increment () {
  return {
    type: typeIncrement
  }
}

export function loadDomains () {
  return {
    type: typeLoadDomains
  }
}

export function postDomain (domain) {
  return {
    type: typePostDomain,
    domain
  }
}

export function random () {
  return {
    type: typeRandom
  }
}

export function reset () {
  return {
    type: typeReset
  }
}

export function setDomains (domains) {
  return {
    type: typeSetDomains,
    domains: domains
  }
}

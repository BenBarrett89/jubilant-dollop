const domainService = db => {
  const deleteDomain = index => {
    return new Promise((resolve, reject) => {
      resolve(db.domains.where('id').anyOf(index).delete())
    })
  }

  const loadDomains = () => {
    return new Promise((resolve, reject) => {
      resolve(db.domains.toArray())
    })
  }

  const postDomain = domain => {
    return new Promise((resolve, reject) => {
      const now = new Date().toString()
      resolve(db.domains.put({
        time: now,
        value: domain
      }))
    })
  }

  return {
    deleteDomain,
    loadDomains,
    postDomain
  }
}

module.exports = {
  init: domainService
}

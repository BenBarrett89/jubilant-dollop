const charactersService = db => {
  const deleteCharacter = index => {
    return new Promise((resolve, reject) => {
      resolve(db.characters.where('id').anyOf(index).delete())
    })
  }

  const loadCharacters = () => {
    return new Promise((resolve, reject) => {
      resolve(db.characters.toArray())
    })
  }

  const putCharacter = character => {
    return new Promise((resolve, reject) => {
      resolve(db.characters.put(character))
    })
  }

  return {
    deleteCharacter,
    loadCharacters,
    putCharacter
  }
}

module.exports = {
  init: charactersService
}

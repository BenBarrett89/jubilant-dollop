import Dexie from 'dexie'

const db = new Dexie('literate-succotash')
db.version(1).stores({
  domains: `++id, value, time`,
  characters: `++id, name, description, motivation, goal, conflict, epiphany, *relationships`
})

export default db

// IDEAS
// characters: `++id, personalData, physicalFeatures, behaviours, attitudes, emotionalCharacteristics, ideas, passions, sociology, past, conflict, evolution, *relationships`, // (http://www.bibisco.com/img/screenshot/en/character.jpg & http://www.writerswrite.com/journal/jun98/how-to-create-a-character-profile-6986) there are many other character profiles out there too!
// relationships: `++id, *characters, title, description`, // one-to-one/groups/factions/families
// locations: `++id, name, geographicalFeatures, populus, architecture, parent, *children`, // https://docs.google.com/file/d/0B4D2ui8jtCEMVTVIQk5jaTFpNFU/edit
// structures: `++id, title, description, pov, *previous, *next, *parents, *children, *characters, *locations, *references, *events`, // sections/acts/scenes/scenes/sequelski/sho/ten/ketsu?
// references: `++id, title, type, descption`, // themes/story-lines/tropes/tags (http://www.theologeek.ch/manuskript/2016/02/28/story-line/)
// events: `++id, title, type, description` // purpose/plot points/ki/sho/ten/ketsu?

const search = require('./utils/recursiveSearch')
const sim = require('./utils/SimCheck')
const ontology_1 = require('../data/ontology1')
const synonyms = require('./utils/synonyms')

const result = synonyms(search("equipment",ontology_1))
console.log(result)
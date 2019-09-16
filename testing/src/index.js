const search = require('./utils/recursiveSearch')
const sim = require('./utils/SimCheck')
const ontology_1 = require('../data/ontology1')

const result = search("equipment",ontology_1)
console.log(result.FoundNode)
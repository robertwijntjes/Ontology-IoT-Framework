const ontology1 = require('../data/ontology1')
const recursive = require('./utils/recursiveSearch')

const result = recursive("invasive",ontology1)

console.log({Result:result})
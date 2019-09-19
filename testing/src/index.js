// const search = require('./utils/recursiveSearch')
// const sim = require('./utils/SimCheck')
// const ontology_1 = require('../data/ontology1')
// const synonyms = require('./utils/synonyms')

// const result = synonyms(search("equipment",ontology_1))
// console.log(result)

const database = 
[ { Client: 1, Response: { Syn_arr: ['a','b','c'] } },
  { Client: 2, Response: { Syn_arr: ['1','2','3'] } } ]

function _isContains(json, value) {
    let contains = false;
    Object.keys(json).some(key => {
        contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
         return contains;
    });
    return contains;
 }

 console.log(_isContains(database,'Syn_arr'))


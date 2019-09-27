const request = require('request')
const rp = require('request-promise')
// const dictSearch = require('./utils/TreeSearch/dictSearch')
// Packages

const {option_1,option_2,option_3} = require('../db/options/options_cl1')
// Data
// console.log(dictSearch('vulnerability'))

async function RequestLineExecute() {
    const data = {}

    await rp(option_1)
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // First funciton execution

    await rp(option_2)    
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // // Second Function Execution

    await rp(option_3)    
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // Third Function Execution
}

RequestLineExecute()
.catch(error=> console.log)












/*
@@@@ Client @@@@
1. Amount of children the node has:                     parent_child(recursive("equipment",ontology_1))
2. The depth of the node:                               distance_center(recursive("equipment",ontology_1)) 
3. Synonyms Sim-Calculation                             synonyms(recursive("vulnerability",ontology_1))
4. Antonym Sim-Calculation (opposite-of):               antonyms(recursive("vulnerability",ontology_1))
5. Check Node Attributes:                               attributes(recursive("vulnerability",ontology_1))

@@@@ Server @@@@
1. Similarity Calculation:                              **ping-server**

*/
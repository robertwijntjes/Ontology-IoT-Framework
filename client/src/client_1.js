const request = require('request')
// Packages

const recursive = require('./utils/TreeSearch/recursiveSearch')
const parent_child = require('./utils/single ontology cal/parent-child')
const antonyms = require('./utils/single ontology cal/antonyms')
const distance_center = require('./utils/single ontology cal/distance-center')
const simcheck = require('./utils/dual ontology/SimCheck')
const {synonyms_amount,synonyms_list} = require('./utils/single ontology cal/synonyms')
const {attributes_amount,attributes_list} = require('./utils/single ontology cal/attributes')
// Utilities

const ontology_1 = require('../db/data/ontology1')
// Data

request.post({
    
    url:"http://127.0.0.1:3000/interface/data",
    json: { Client:1 , Response:attributes_list(recursive("invasive",ontology_1)) }
}, 
(error , res , body)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(body)
    }
    //console.log(res)
})


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
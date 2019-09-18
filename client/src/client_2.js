const request = require('request')
// Packages

const recursive = require('./utils/TreeSearch/recursiveSearch')
const parent_child = require('./utils/single ontology cal/parent-child')
const antonyms = require('./utils/single ontology cal/antonyms')
const distance_center = require('./utils/single ontology cal/distance-center')
const simcheck = require('./utils/dual ontology/SimCheck')
const {synonyms_amount,synonyms_list}  = require('./utils/single ontology cal/synonyms')
const {attributes_amount,attributes_list} = require('./utils/single ontology cal/attributes')
// Utilities

const ontology_2 = require('../db/data/ontology2')
// Data

request.post({
    
    url:"http://127.0.0.1:3000/interface/data",
    json: { Client:2 , Response:synonyms_list(recursive("equipment",ontology_2)) }
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
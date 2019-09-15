const request = require('request')
// Packages

const recursive = require('./utils/calculation/recursiveSearch')
const distance_center = require('./utils/single ontology cal/distance-center')
const parent_distance = require('./utils/single ontology cal/parent-child')
const wordnet_sim = require('./utils/single ontology cal/wordnet')
// Utilities

const ontology_2 = require('../db/data/ontology2')
// Data

request.post({
    
    url:"http://127.0.0.1:3000/interface/data",
    json: { Client:2 , Response:distance_center(recursive("vunerability",ontology_2)) }
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
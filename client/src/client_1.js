const request = require('request')
// Packages

const recursive = require('./utils/calculation/recursiveSearch')
const parent_child = require('./utils/single ontology cal/parent-child')
const distance_center = require('./utils/single ontology cal/distance-center')
const simcheck = require('./utils/single ontology cal/SimCheck')
// Utilities

const ontology_1 = require('../db/data/ontology1')
// Data

request.post({
    
    url:"http://127.0.0.1:3000/interface/data",
    json: { Client:1 , Response:parent_child(recursive("equipment",ontology_1)) }
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
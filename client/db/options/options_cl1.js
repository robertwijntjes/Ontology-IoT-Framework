const recursive = require('../../src/utils/TreeSearch/recursiveSearch')
const parent_child = require('../../src/utils/single ontology cal/parent-child')
const distance_center = require('../../src/utils/single ontology cal/distance-center')
const SimCheck = require('../../src/utils/dual ontology/SimCheck')
const {antonyms_list,antonyms_amount,antonyms_array} = require('../../src/utils/single ontology cal/antonyms')
const {synonyms_list,synonyms_amount,synonyms_array} = require('../../src/utils/single ontology cal/synonyms')
const {attributes_list,attributes_amount,attributes_array} = require('../../src/utils/single ontology cal/attributes')
// Utilities

const ontology_1 = require('../data/ontology1')
// Ontology Import

const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[synonyms_array(recursive("invasive",ontology_1)) ]}
}

const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[attributes_list(recursive("invasive",ontology_1))] }
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[attributes_list(recursive("invasive",ontology_1))]}
}

module.exports = {
    option_1,
    option_2,
    option_3
}
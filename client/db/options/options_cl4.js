const recursive = require('../../src/utils/TreeSearch/recursiveSearch')
// Tree Search Calculation

const parent_child = require('../../src/utils/single ontology cal/parent-child')
const distance_center = require('../../src/utils/single ontology cal/distance-center')
// Node Placement Calculations

const {antonyms_list,antonyms_amount,antonyms_array} = require('../../src/utils/single ontology cal/antonyms')
const {synonyms_list,synonyms_amount,synonyms_array} = require('../../src/utils/single ontology cal/synonyms')
const {attributes_list,attributes_amount,attributes_array} = require('../../src/utils/single ontology cal/attributes')
// TypeOf Calculations

const tlnd_dist = require('../../src/utils/single ontology cal/tlnd_dist')
const tlnd_node_density = require('../../src/utils/single ontology cal/tlnd_node_density')
const tlnd_weight = require('../../src/utils/single ontology cal/tlnd_weight')
// tlnd specific Calculation

const ontology_4 = require('../data/ontology4')
// Ontology Import



const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[tlnd_weight(recursive("instrument",ontology_4)) ]}
}

const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[attributes_list(recursive("cannula",ontology_4)) ]}
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[antonyms_list(recursive("instrument",ontology_4)) ]}
}


module.exports = {
    option_1,
    option_2,
    option_3
}
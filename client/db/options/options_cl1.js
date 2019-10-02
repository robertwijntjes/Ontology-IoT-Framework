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

const {equipment,size} = require('../data/ontology1')
// Ontology Import

const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[tlnd_node_density(recursive("vulnerability",equipment),size) ]}
}

const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[tlnd_weight(recursive("vulnerability",equipment),size)] }
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[tlnd_dist(recursive("vulnerability",equipment))]}
}

module.exports = {
    option_1,
    option_2,
    option_3
}
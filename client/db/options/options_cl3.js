const recursive = require('../../src/utils/TreeSearch/recursiveSearch')
const ancestor = require('../../src/utils/single ontology cal/ancestorSearch')
// Tree Search Calculation

const parent_child = require('../../src/utils/single ontology cal/parent-child')
const distance_center = require('../../src/utils/single ontology cal/distance-center')
// Node Placement Calculations

const {antonyms_list,antonyms_amount,antonyms_array} = require('../../src/utils/single ontology cal/antonyms')
const {synonyms_list,synonyms_amount,synonyms_array} = require('../../src/utils/single ontology cal/synonyms')
const {attributes_list,attributes_amount,attributes_array} = require('../../src/utils/single ontology cal/attributes')

// TypeOf Calculations

const tlnd_dist = require('../../src/utils/single ontology cal/tlnd/tlnd_dist')
const tlnd_node_density = require('../../src/utils/single ontology cal/tlnd/tlnd_node_density')
const tlnd_weight = require('../../src/utils/single ontology cal/tlnd/tlnd_weight')
const {link_calculation,ontology_link_cal} = require('../../src/utils/single ontology cal/tlnd/tlnd_link_cal')
// tlnd specific Calculation

const {tool,size,height} = require('../data/ontology3')
// Ontology Import

const term = "flu"

const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:3 , Response:[tlnd_weight(recursive(term,tool),size)],height:height}
}

const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:3 , Response:[tlnd_node_density(recursive(term,tool),size)],height:height}
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:3 , Response:[tlnd_dist(recursive(term,tool)) ],height:height}
}

const option_4 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:3 , Response:[ontology_link_cal(recursive(term,tool)) ],height:height}
}

module.exports = {
    option_1,
    option_2,
    option_3,
    option_4
}
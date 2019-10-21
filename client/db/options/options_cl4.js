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

const tlnd_dist = require('../../src/utils/single ontology cal/tlnd_dist')
const tlnd_node_density = require('../../src/utils/single ontology cal/tlnd_node_density')
const tlnd_weight = require('../../src/utils/single ontology cal/tlnd_weight')
const {link_calculation,ontology_link_cal} = require('../../src/utils/single ontology cal/tlnd_link_cal')
// tlnd specific Calculation

const {instrument,size,height} = require('../data/ontology4')
// Ontology Import



const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[ancestor("velcro_component",instrument,[]) ],height:height}
}

const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[distance_center(recursive("velcro_component",instrument)) ],height:height}
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[tlnd_dist(recursive("cannula",instrument)) ],height:height}
}

const option_4 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:4 , Response:[ontology_link_cal(recursive("plastic_component",equipment)) ],height:height}
}


module.exports = {
    option_1,
    option_2,
    option_3,
    option_4
}
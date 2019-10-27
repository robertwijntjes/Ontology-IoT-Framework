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


const common_properties = require('../../src/utils/single ontology cal/slo/common_prop')
const term_name = require('../../src/utils/single ontology cal/slo/term_name')
// Slo Calculations

const {equipment,size,height} = require('../data/ontology1')
// Ontology Import

const term = "equipment"

const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[common_properties(recursive(term,equipment),size)],height:height}
}

const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[antonyms_array(recursive(term,equipment),size)],height:height}
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:1 , Response:[ synonyms_array(recursive(term,equipment)) ],height:height}
}

module.exports = {
    option_1,
    option_2,
    option_3
}
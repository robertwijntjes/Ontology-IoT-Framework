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
const node_name = require('../../src/utils/single ontology cal/term_name_get')
// Slo Calculations

const {single_density,list_density} = require('../../src/utils/single ontology cal/hybrid/density')
const ancestorDense = require('../../src/utils/single ontology cal/hybrid/ancestorDensity')
// hybrid calculations

const {equipment,size,height,connections} = require('../data/ontology2')
// Ontology Import



const term = "intradermal syringe"

const option_1 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:2 , Response:[common_properties(recursive(term,equipment),size)],height:height}
}


const option_2 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:2 , Response:[ synonyms_array(recursive(term,equipment)) ],height:height}
}

const option_3 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:2 , Response:[ ancestor(term,equipment,[]) ],height:height}
}


const option_4 = {
    method:'POST',
    url:'http://127.0.0.1:3000/interface/data',
    json: { Client:2 , Response:[ node_name(recursive(term,equipment)) ],height:height}
}

module.exports = {
    option_1,
    option_2,
    option_3,
    option_4
}
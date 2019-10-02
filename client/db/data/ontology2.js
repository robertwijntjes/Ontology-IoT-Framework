const ont_node = require('../models/node_model')
const size = 7
const height = 4

// // Central Node
const equipment = new ont_node({
    nodeName:"equipment",
    relationship:"central_node",
    connected_to:[],
    linked_to:[], 
    level:1,
    attributes:['name','id','description','usedfor','kind','interventional_id','invasive_id','non_invasive_id']})

const injection_syringe = new ont_node({
    nodeName:"injection syringe",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["equipment"],
    level:2,
    attributes:['name','id','equipment_id','type_id']})

const heart_beat_monitor = new ont_node({
    nodeName:"heart beat monitor",
    relationship:"subClassOf", 
    connected_to:[],
    linked_to:["equipment"],
    level:2,
    attributes:['name','id','description','type_id']})

const weakness = new ont_node({
    nodeName:"weakness",
    relationship:"UsedFor" ,
    connected_to:[],
    linked_to:["equipment"], 
    level:2,
    attributes:["weak_id","weak_name","equip_id","feature"]})


const MCT = new ont_node({
    nodeName:"mobile cardiac telemetry",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["heart_beat_monitor"],
    level:3,
    attributes:["mct_name","mct_id","date_of_use"]})


const intradermal_syringe = new ont_node({
    nodeName:"intradermal_syringe",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["injection_syringe"],
    level:3,
    attributes:["mct_name","mct_id","date_of_use"]})

const plastic_component = new ont_node({
    nodeName:"plastic_component",
    relationship:"component" ,
    connected_to:[],
    linked_to:["intradermal_syringe"],
    level:4,
    attributes:["component_item_id","component_item_name"]
})

equipment.connected_to = [injection_syringe,heart_beat_monitor,weakness]
heart_beat_monitor.connected_to = [MCT]
injection_syringe.connected_to = [intradermal_syringe]
intradermal_syringe.connected_to = [plastic_component]

module.exports = {
    equipment,
    size,
    height
}
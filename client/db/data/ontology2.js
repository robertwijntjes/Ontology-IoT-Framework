const ont_node = require('../models/node_model')


// // Central Node
const equipment = new ont_node({
    nodeName:"equipment",
    relationship:"subClassOf",
    connected_to:[],
    linked_to:['injection_syringe','heart_beat_monitor','weakness'], 
    level:0,
    attributes:['name','id','description','usedfor','kind']})

const injection_syringe = new ont_node({
    nodeName:"injection syringe",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["equipment"],
    level:1,
    attributes:['name','id','description']})

const heart_beat_monitor = new ont_node({
    nodeName:"heart beat monitor",
    relationship:"subClassOf", 
    connected_to:[],
    linked_to:["equipment"],
    level:1,
    attributes:['name','id','description']})

const weakness = new ont_node({
    nodeName:"weakness",
    relationship:"UsedFor" ,
    connected_to:[],
    linked_to:["equipment"], 
    level:1,
    attributes:["weak_id","weak_name","equip_id","feature"]})


const MCT = new ont_node({
    nodeName:"Mobile Cardiac Telemetry",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["heart_beat_monitor"],
    level:2,
    attributes:["vun_id","vun_name","equipement_id","feature"]})


const intradermal_syringe = new ont_node({
    nodeName:"intradermal_syringe",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["injection_syringe"],
    level:2,
    attributes:["syr_id","syr_name","instrument_id","feature"]})

equipment.connected_to = [injection_syringe,heart_beat_monitor,weakness]
heart_beat_monitor.connected_to = [MCT]
injection_syringe.connected_to = [intradermal_syringe]

module.exports = equipment;
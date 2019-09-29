const ont_node = require('../models/node_model')


// // Central Node
const equipment = new ont_node({
    nodeName:"equipment",
    relationship:"subClassOf",
    connected_to:[],
    linked_to:["invasive","non_invasive","vulnerability"],
    level:0,
    attributes:['name','id','description','usedfor','kind']})

const invasive = new ont_node({
    nodeName:"invasive",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["equipment"],
    level:1,
    attributes:['name','id']})

const non_invasive = new ont_node({
    nodeName:"non_invasive",
    relationship:"subClassOf",
    connected_to:[],
    linked_to:["equipment"],
    level:1,
    attributes:['name','id']})
    
const vulnerability = new ont_node({
    nodeName:"vulnerability",
    relationship:"UsedFor" ,
    connected_to:[],
    linked_to:["equipment"],
    level:1,
    attributes:["vun_id","vun_name","equipment_id","feature"]})

const heart_monitor = new ont_node({
    nodeName:"heart_monitor",
    relationship:"subClassOf", 
    connected_to:[],
    linked_to:["non_invasive"],
    level:2, 
    attributes:['name','id']})


const injection_syringe = new ont_node({
    nodeName:"injection syringe",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["invasive"],
    level:2,
    attributes:['name','id','description']})


equipment.connected_to = [invasive,non_invasive,vulnerability]
invasive.connected_to = [injection_syringe]
non_invasive.connected_to = [heart_monitor]

module.exports = equipment;
const ont_node = require('../models/node_model')
const size = 7
const height = 3

// // Central Node
const equipment = new ont_node({
    nodeName:"equipment",
    relationship:"central_node",
    connected_to:[],
    linked_to:[],
    level:1,
    attributes:['name','id','description','usedfor','kind','interventional_id','invasive_id','non_invasive_id']})

const interventional = new ont_node({
    nodeName:"interventional",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["equipment"],
    level:2,
    attributes:['name','id','equipment_id','type']
})

const invasive = new ont_node({
    nodeName:"invasive",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["equipment"],
    level:2,
    attributes:['name','id','equipment_id','type']})

const non_invasive = new ont_node({
    nodeName:"non_invasive",
    relationship:"subClassOf",
    connected_to:[],
    linked_to:["equipment"],
    level:2,
    attributes:['name','id','equipment_id','type']})
    
const vulnerability = new ont_node({
    nodeName:"vulnerability",
    relationship:"UsedFor" ,
    connected_to:[],
    linked_to:["equipment"],
    level:2,
    attributes:["vulnerability_id","vulnerability_name","equipment_id","feature",'description']})

const heart_monitor = new ont_node({
    nodeName:"heart_monitor",
    relationship:"instance", 
    connected_to:[],
    linked_to:["non_invasive"],
    level:3, 
    attributes:['name','id','description']})


const injection_syringe = new ont_node({
    nodeName:"injection syringe",
    relationship:"instance",
    connected_to: [],
    linked_to:["invasive"],
    level:3,
    attributes:['name','id','description']})


equipment.connected_to = [invasive,non_invasive,vulnerability,interventional]
invasive.connected_to = [injection_syringe]
non_invasive.connected_to = [heart_monitor]

module.exports = {
    equipment,
    size,
    height
}
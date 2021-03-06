const ont_node = require('../models/node_model')
const size = 8
const height = 4
const connections = {
    connects:7,
    max:3,
    min:1,
    density: 2.0996,
    total_density: 0.2499
}

// // Central Node
const instrument = new ont_node({
    nodeName:"instrument",
    relationship:"central_node",
    connected_to:[],
    linked_to:[],
    level:1,
    connections:3,
    attributes:['name','id','description','usedfor','kind']})

const needle = new ont_node({
    nodeName:"needle",
    relationship:"subClassOf",
    connected_to: [],
    linked_to:["instrument"], 
    level:2, 
    connections:2,
    attributes:['name','id']})

const non_invasive = new ont_node({
    nodeName:"non_invasive",
    relationship:"subClassOf", 
    connected_to:[],
    linked_to:["instrument"],
    level:2, 
    connections:2,
    attributes:['name','id']})

const liability  = new ont_node({
    nodeName:"liability",
    relationship:"subClassOf" ,
    connected_to:[],
    linked_to:["instrument"],
    level:2,
    connections:1,
    attributes:["vun_id","vun_name","instrument_id","feature"]})

const cannula = new ont_node({
    nodeName:"cannula",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["needle"],
    level:3,
    connections:1,
    attributes:["vun_id","vun_name","instrument_id","feature"]})


const blood_pressure_strap = new ont_node({
    nodeName:"blood pressure strap",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["non_invasive"],
    level:3,
    connections:3,
    attributes:["vun_id","vun_name","instrument_id","feature"]})

const leather_component = new ont_node({
    nodeName:"leather component",
    relationship:"component" ,
    connected_to:[],
    linked_to:["blood_pressure_strap"],
    level:4,
    connections:1,
    attributes:["vun_id","vun_name","instrument_id","feature"]})

const velcro_component= new ont_node({
    nodeName:"velcro component",
    relationship:"component" ,
    connected_to:[],
    linked_to:["blood_pressure_strap"],
    level:4,
    connections:1,
    attributes:["vun_id","vun_name","instrument_id","feature"]})

instrument.connected_to = [needle,non_invasive,liability]
needle.connected_to = [cannula]
non_invasive.connected_to = [blood_pressure_strap]
blood_pressure_strap.connected_to = [leather_component,velcro_component]


module.exports = {
    instrument,
    size,
    height,
    connections
}
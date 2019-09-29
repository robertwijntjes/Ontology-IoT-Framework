const ont_node = require('../models/node_model')


// // Central Node
const instrument = new ont_node({
    nodeName:"instrument",
    relationship:"subClassOf",
    connected_to:[],
    linked_to:['cannula','non_invasive','liability'],
    level:0,
    attributes:['name','id','description','usedfor','kind']})

const needle = new ont_node({
    nodeName:"needle",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["instrument"], 
    level:1, 
    attributes:['name','id']})

const non_invasive = new ont_node({
    nodeName:"non_invasive",
    relationship:"subClassOf", 
    connected_to:[],
    linked_to:["instrument"],
    level:1, 
    attributes:['name','id']})

const liability  = new ont_node({
    nodeName:"liability",
    relationship:"UsedFor" ,
    connected_to:[],
    linked_to:["instrument"],
    level:1,
    attributes:["vun_id","vun_name","instrument_id","feature"]})

const cannula = new ont_node({
    nodeName:"cannula",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["needle"],
    level:2,
    attributes:["vun_id","vun_name","instrument_id","feature"]})


const blood_pressure_strap = new ont_node({
    nodeName:"blood pressure strap",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["non_invasive"],
    level:2,
    attributes:["vun_id","vun_name","instrument_id","feature"]})

instrument.connected_to = [needle,non_invasive,liability]
needle.connected_to = [cannula]
non_invasive.connected_to = [blood_pressure_strap]


module.exports = instrument;
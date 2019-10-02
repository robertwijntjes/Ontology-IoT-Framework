const ont_node = require('../models/node_model')
const size = 6

// // Central Node
const tool = new ont_node({
    nodeName:"tool",
    relationship:"central_node",
    connected_to:[],
    linked_to:[],
    level:1,
    attributes:['name','id','description','usedfor','kind']})

const invasive = new ont_node({
    nodeName:"invasive",
    relationship:"SubClassOf",
    connected_to: [],
    linked_to:["tool"], 
    level:2, attributes:['name','id']})

const heart_monitor = new ont_node({
    nodeName:"heart_monitor",
    relationship:"subClassOf", 
    connected_to:[],
    linked_to:["tool"],
    level:2, 
    attributes:['name','id']})

const susceptibility  = new ont_node({
    nodeName:"susceptibility",
    relationship:"UsedFor" ,
    connected_to:[], 
    linked_to:["tool"],
    level:2,
    attributes:["sus_id","sus_name","tool_id","feature"]})

const cannula = new ont_node({
    nodeName:"cannula",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["invasive"],
    level:3,
    attributes:["can_id","can_name","sus_id","feature"]})

const flu = new ont_node({
    nodeName:"flu",
    relationship:"instance" ,
    connected_to:[],
    linked_to:["suceptability"],
    level:3,
    attributes:["flu_id","flu_name","tool_id","feature"]})

tool.connected_to = [invasive,heart_monitor,susceptibility]
invasive.connected_to = [cannula]
susceptibility.connected_to = [flu]

module.exports = {
    tool,
    size
}
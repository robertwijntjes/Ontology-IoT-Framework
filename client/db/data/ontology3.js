const ont_node = require('../models/node_model')


// // Central Node
const tool = new ont_node({nodeName:"tool",relationship:"subClassOf",connected_to:[],linked_to:null,level:0, attributes:['name','id','description','usedfor','kind']})
const invasive = new ont_node({nodeName:"invasive",relationship:"SubClassOf", connected_to: [],linked_to:"tool", level:1, attributes:['name','id']})
const heart_monitor = new ont_node({nodeName:"heart_monitor",relationship:"subClassOf", connected_to:[],linked_to:"tool",level:1, attributes:['name','id']})
const susceptibility  = new ont_node({nodeName:"susceptibility",relationship:"UsedFor" ,connected_to:[], linked_to:"tool",level:1,attributes:["vun_id","vun_name","tool_id","feature"]})

tool.connected_to = [invasive,heart_monitor,susceptibility]

module.exports = tool;
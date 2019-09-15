const ont_node = require('../models/node_model')


// // Central Node
const equipment = new ont_node({nodeName:"equipment",relationship:"subClassOf",connected_to:[],linked_to:null, level:0,attributes:['name','id','description','usedfor','kind']})
const invasive = new ont_node({nodeName:"injection syringe",relationship:"SubClassOf", connected_to: [],linked_to:"equipment", level:1,attributes:['name','id','description']})
const non_invasive = new ont_node({nodeName:"heart beat monitor",relationship:"subClassOf", connected_to:[],linked_to:"equipment", level:1,attributes:['name','id','description']})
const vunerability = new ont_node({nodeName:"vunerability",relationship:"UsedFor" ,connected_to:[],linked_to:"equipment", level:1,attributes:["vun_id","vun_name","tool_id","feature"]})

equipment.connected_to = [invasive,non_invasive,vunerability]

module.exports = equipment;
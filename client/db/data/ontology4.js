const ont_node = require('../models/node_model')


// // Central Node
const instrument = new ont_node({nodeName:"instrument",relationship:"subClassOf",connected_to:[],linked_to:null,level:0, attributes:['name','id','description','usedfor','kind']})
const cannula = new ont_node({nodeName:"cannula",relationship:"SubClassOf", connected_to: [],linked_to:"instrument", level:1, attributes:['name','id']})
const non_invasive = new ont_node({nodeName:"non_invasive",relationship:"subClassOf", connected_to:[],linked_to:"instrument",level:1, attributes:['name','id']})
const liability  = new ont_node({nodeName:"liability",relationship:"UsedFor" ,connected_to:[], linked_to:"instrument",level:1,attributes:["vun_id","vun_name","instrument_id","feature"]})

instrument.connected_to = [cannula,non_invasive,liability]

module.exports = instrument;
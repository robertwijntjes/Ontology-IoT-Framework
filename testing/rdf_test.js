const JsonFind = require('json-find')

const graph = []


// Central Node
const equipment = new Object()
equipment.nodeName = "equipment"
equipment.relationship = "parent_node"
equipment.connected_to = [null]
equipment.attributes = ["equipment_id","equipment_description","FILLMEIN","FILLMEIN"]
// Central Node

// Subclasses of Equipment
const invasive = new Object()
invasive.nodeName = "invasive"
invasive.relationship = "SubClassOf"
invasive.connected_to = null
invasive.attributes = ['name','ID']

const non_invasive = new Object()
non_invasive.nodeName = "non_invasive"
non_invasive.relationship = "SubClassOf"
non_invasive.connected_to = null
equipment.attributes = ['name','ID']
// Subclasses of Equipment

// UsedFor
const vunerability = new Object()
vunerability.nodeName = "vunerability"
vunerability.relationship = "UsedFor"
vunerability.connected_to = null
vunerability.attributes = ["vun_id","vun_name","equipment_id","feature"]
// UsedFor
equipment.connected_to = [vunerability,invasive,non_invasive]

graph.push(equipment,invasive,non_invasive,vunerability)

const doc = JsonFind(equipment)
// console.log(doc.checkKey('vunerability'))
console.log(equipment)




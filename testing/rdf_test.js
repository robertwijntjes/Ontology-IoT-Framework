class ont_node{
    constructor(nodeName,relationship,connected_to,attributes){
        this.nodeName = nodeName
        this.relationship = relationship
        this.connected_to = connected_to
        this.attributes = attributes
    }
}
// Central Node
const equipment = new ont_node("equipment","parent_node",[null],["equipment_id","equipment_description","FILLMEIN","FILLMEIN"])
const invasive = new ont_node("invasive","SubClassOf",[equipment],['name','ID'])
const non_invasive = new ont_node("non_invasive","subClassOf",[equipment],['name','ID'])
const vunerability = new ont_node("vunerability","UsedFor",[equipment],["vun_id","vun_name","equipment_id","feature"])

equipment.connected_to = [invasive,non_invasive,vunerability]

console.log(equipment)
// Central Node

// // Subclasses of Equipment
// const invasive = new Object()
// invasive.nodeName = "invasive"
// invasive.relationship = "SubClassOf"
// invasive.connected_to = equipment
// invasive.attributes = ['name','ID']

// const non_invasive = new Object()
// non_invasive.nodeName = "non_invasive"
// non_invasive.relationship = "SubClassOf"
// non_invasive.connected_to = equipment
// equipment.attributes = ['name','ID']
// // Subclasses of Equipment

// // UsedFor
// const vunerability = new Object()
// vunerability.nodeName = "vunerability"
// vunerability.relationship = "UsedFor"
// vunerability.connected_to = equipment
// vunerability.attributes = ["vun_id","vun_name","equipment_id","feature"]
// // UsedFor
// equipment.connected_to = [vunerability,invasive,non_invasive]

// graph.push(equipment,invasive,non_invasive,vunerability)




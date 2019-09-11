const ont_node = require('./models/node_model')
const JsonFind = require('json-find')



// // Central Node
const equipment = new ont_node({nodeName:"equipment",relationship:"subClassOf",connected_to:[null], attributes:['xx','xx','xx']})
const invasive = new ont_node({nodeName:"invasive",relationship:"SubClassOf", connected_to: [null], attributes:['name','ID']})
const non_invasive = new ont_node({nodeName:"non_invasive",relationship:"subClassOf", connected_to:[null], attributes:['name','ID']})
const vunerability = new ont_node({nodeName:"vunerability",relationship:"UsedFor" ,connected_to:[null], attributes:["vun_id","vun_name","equipment_id","feature"]})

equipment.connected_to = [invasive,non_invasive,vunerability]

// console.log(equipment.connected_to[0].nodeName)

var currentNode = equipment

while(currentNode){
    
    if(currentNode.nodeName == "invasive"){
        return currentNode
    }else{
        var counter = -1
        while(currentNode.connected_to != null && counter <= currentNode.connected_to.length -2){
            console.log(counter +=1)
            if(currentNode.connected_to[counter].nodeName == "invasive"){
                currentNode = currentNode.connected_to[counter]
                counter = 0
                console.log(currentNode)
                break
            }
            else{
                counter += 1
            }
        }
    }
    break
}

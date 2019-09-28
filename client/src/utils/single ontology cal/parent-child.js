const parent_child = (ontology) =>{
    return {operation:ontology.FoundNode.connected_to.length,type:'parent_child',input:ontology.FoundNode.nodeName}
}

module.exports = parent_child
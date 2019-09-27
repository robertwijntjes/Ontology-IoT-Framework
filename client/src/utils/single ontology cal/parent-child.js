const parent_child = (ontology) =>{
    return {Result:ontology.FoundNode.connected_to.length,input:ontology.FoundNode.nodeName}
}

module.exports = parent_child
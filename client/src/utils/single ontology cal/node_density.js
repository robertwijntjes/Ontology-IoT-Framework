const parent_child = (ontology) =>{
    return {
        operation: ((ontology.FoundNode.linked_to.length + 1) * ontology.FoundNode.linked_to.length - 1),
        type:'node_density',
        input:ontology.FoundNode.nodeName}
}

module.exports = parent_child


// PC = n*(n-1)/2
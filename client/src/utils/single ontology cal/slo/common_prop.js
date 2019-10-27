const common_prop = (ontology) =>{
    return {
        operation: (
            ontology.FoundNode.attributes.length + 
            ontology.FoundNode.connected_to.length +
            ontology.FoundNode.linked_to.length,
            ontology.FoundNode.level
        ),
        type:'common_prop',
        input:ontology.FoundNode.nodeName}
}

module.exports = common_prop

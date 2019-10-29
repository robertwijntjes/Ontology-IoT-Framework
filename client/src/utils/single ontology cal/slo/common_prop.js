const common_prop = (ontology,size) =>{
    return {
        operation: (
            ontology.FoundNode.attributes.length +
            ontology.FoundNode.level + 
            ((ontology.FoundNode.linked_to.length + ontology.FoundNode.connected_to.length +1)/(size*2))
        ),
        type:'common_prop',
        input:ontology.FoundNode.nodeName}
}

module.exports = common_prop

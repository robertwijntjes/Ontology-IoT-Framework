const semantic_distance = (ontology) =>{
    return {
        operation:0,
        type:'semantic_distance',
        input:ontology.FoundNode.nodeName}
}

module.exports = semantic_distance

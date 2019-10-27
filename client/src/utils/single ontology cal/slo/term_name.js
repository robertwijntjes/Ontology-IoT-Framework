const term_name = (ontology) =>{
    return {
        operation: ontology.FoundNode.nodeName,
        type:'term_name',
        input:ontology.FoundNode.nodeName}
}

module.exports = term_name

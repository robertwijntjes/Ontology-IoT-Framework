const term_name = (ontology) =>{
    return {
        operation: ontology.FoundNode.nodeName,
        type:'term_name',
        input:ontology.FoundNode.nodeName}
}

const node_link = (ontology) =>{
    return {
        operation:ontology.FoundNode.relationship,
        type:'link_type',
        input:ontology.FoundNode.relationship
    }
}

module.exports = {
    term_name,
    node_link
}

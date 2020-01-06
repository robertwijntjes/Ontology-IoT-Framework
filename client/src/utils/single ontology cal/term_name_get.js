const node_name = (ontology) =>{
    return {
        operation:ontology.FoundNode.nodeName,
        type:'nodename',
        input:ontology.FoundNode.nodeName}
}

const node_link = (ontology) =>{
    return {
        operation:ontology.FoundNode.relationship,
        type:'link_type',
        input:ontology.FoundNode.relationship
    }
}

module.exports = 
{
    node_name,
    node_link
}

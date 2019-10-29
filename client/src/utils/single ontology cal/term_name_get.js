const node_name = (ontology) =>{
    return {
        operation:ontology.FoundNode.nodeName,
        type:'nodename',
        input:ontology.FoundNode.nodeName}
}

module.exports = node_name

const tlnd_dist = (ontology) =>{
    return {
        operation:ontology.FoundNode.connected_to.length.toFixed(2),
        type:'tlnd_weight',
        input:ontology.FoundNode.nodeName}
}

module.exports = tlnd_dist
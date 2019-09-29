const tlnd_dist = (ontology) =>{
    return {
        operation:ontology.FoundNode.connected_to.length/3,
        type:'distance_center',
        input:ontology.FoundNode.nodeName}
}

module.exports = tlnd_dist
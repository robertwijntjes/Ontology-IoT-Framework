const distance_center = (ontology) =>{
    return {operation:ontology.FoundNode.level,type:'distance_center',input:ontology.FoundNode.nodeName}
}

module.exports = distance_center
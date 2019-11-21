const distance = (ontology) =>{
    return {operation:ontology.FoundNode.level,type:'distance_center',input:ontology.FoundNode.nodeName}
}

module.exports = distance
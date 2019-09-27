const attributes_list = (ontology) =>{
    return {operation:ontology.FoundNode.attributes.join(),type:'attributes_list',input:ontology.FoundNode.nodeName}
}

const attributes_amount = (ontology) =>{
    return {operation:ontology.FoundNode.attributes.length,type:'attributes_amount',input:ontology.FoundNode.nodeName}
}

const attributes_array = (ontology) =>{
    return {operation:ontology.FoundNode.attributes,type:'attributes_array',input:ontology.FoundNode.nodeName}
}


module.exports = {
    attributes_list,
    attributes_amount,
    attributes_array
}
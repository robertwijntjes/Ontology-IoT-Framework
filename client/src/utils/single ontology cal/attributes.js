const attributes_list = (ontology) =>{
    return {operation:ontology.FoundNode.attributes.join(),type:'attributes_list'}
}

const attributes_amount = (ontology) =>{
    return {operation:ontology.FoundNode.attributes.length,type:'attributes_amount'}
}

const attributes_array = (ontology) =>{
    return {operation:ontology.FoundNode.attributes,type:'attributes_array'}
}


module.exports = {
    attributes_list,
    attributes_amount,
    attributes_array
}
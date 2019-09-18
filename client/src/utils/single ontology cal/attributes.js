const attributes_list = (ontology) =>{
    return ontology.FoundNode.attributes.join()
}

const attributes_amount = (ontology) =>{
    return ontology.FoundNode.attributes.length
}

const attributes_array = (ontology) =>{
    return ontology.FoundNode.attributes
}


module.exports = {
    attributes_list,
    attributes_amount,
    attributes_array
}
const attributes_amount = (ontology) =>{
    return {Result:ontology.FoundNode.attributes.length}
}

const attributes_list = (ontology) =>{
    return {Result:ontology.FoundNode.attributes.join()}
}

module.exports = {
    attributes_amount,
    attributes_list
}
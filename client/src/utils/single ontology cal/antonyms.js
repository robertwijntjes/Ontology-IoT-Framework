var tcom = require('thesaurus-com');

const antonyms_list = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).antonyms
    .slice(0,8)
    .join()
}

const antonyms_amount = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).antonyms.length
}

const antonyms_array = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).antonyms
    .slice(0,8)
}

module.exports = {
    antonyms_list,
    antonyms_amount,
    antonyms_array
}


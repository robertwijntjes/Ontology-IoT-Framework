var tcom = require('thesaurus-com');

const antonyms_list = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).antonyms
    .slice(0,8)
    .join(),type:'antonyms_list'}
}

const antonyms_amount = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).antonyms.length,type:'antonyms_amount'}
}

const antonyms_array = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).antonyms
    .slice(0,8),type:'antonyms_array'}
}

module.exports = {
    antonyms_list,
    antonyms_amount,
    antonyms_array
}


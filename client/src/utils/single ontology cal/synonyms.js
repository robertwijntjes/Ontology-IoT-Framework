var tcom = require('thesaurus-com');

const synonyms_list = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).synonyms
    .slice(0,8)
    .join(),type:'synonyms_list'}
}

const synonyms_amount = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).synonyms.length,type:'synonyms_amount'}
}

const synonyms_array = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).synonyms
    .slice(0,8),type:'synonyms_array'}
}


module.exports = {
    synonyms_list,
    synonyms_amount,
    synonyms_array
}

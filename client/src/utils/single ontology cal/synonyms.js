var tcom = require('thesaurus-com');

const synonyms_list = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).synonyms
    .slice(0,8)
    .join(),type:'synonyms_list',input:ontology.FoundNode.nodeName}
}

const synonyms_amount = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).synonyms.length,type:'synonyms_amount',input:ontology.FoundNode.nodeName}
}

const synonyms_array = (ontology) =>{
    return {operation:tcom.search(ontology.FoundNode.nodeName).synonyms
    .slice(0,8), type:'synonyms_array',input:ontology.FoundNode.nodeName}
}


module.exports = {
    synonyms_list,
    synonyms_amount,
    synonyms_array
}

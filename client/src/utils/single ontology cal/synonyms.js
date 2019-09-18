var tcom = require('thesaurus-com');

const synonyms_list = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).synonyms
    .slice(0,8)
    .join()
}

const synonyms_amount = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).synonyms.length
}

const synonyms_array = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).synonyms
    .slice(0,8)
}


module.exports = {
    synonyms_list,
    synonyms_amount,
    synonyms_array
}

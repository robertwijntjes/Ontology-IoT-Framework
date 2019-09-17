var tcom = require('thesaurus-com');

const synonyms_list = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).synonyms.join()
}


const synonyms_amount = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).synonyms.length
}

module.exports = {
    synonyms_list,
    synonyms_amount
}

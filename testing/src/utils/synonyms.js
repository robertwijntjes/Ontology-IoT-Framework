var tcom = require('thesaurus-com');

const antonyms = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).synonyms.join()
}

module.exports = antonyms

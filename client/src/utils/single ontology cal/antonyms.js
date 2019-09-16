var tcom = require('thesaurus-com');

const antonyms = (ontology) =>{
    return tcom.search(ontology.FoundNode.nodeName).antonyms.join()
}

module.exports = antonyms


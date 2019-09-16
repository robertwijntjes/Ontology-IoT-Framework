var tcom = require('thesaurus-com');

const antonyms = (ontology) =>{
    
    const term = ontology.FoundNode.nodeName
    return tcom.search(term).antonyms[0]
}

module.exports = antonyms


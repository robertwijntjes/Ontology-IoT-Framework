var tcom = require('thesaurus-com');

const antonyms = (term) =>{
    return tcom.search(term).antonyms[0]
}

module.exports = antonyms

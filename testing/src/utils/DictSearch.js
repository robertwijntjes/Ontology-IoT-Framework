const natural = require('natural')
const wordnet = new natural.WordNet()

const dictSearch = (searchTerm) => {
    wordnet.lookup(searchTerm, function(results) {
        results.forEach(function(result) {
            console.log('------------------------------------');
            console.log(result.synsetOffset);
            console.log(result.pos);
            console.log(result.lemma);
            console.log(result.synonyms);
            console.log(result.pos);
            console.log(result.gloss);
        });
    });
}

module.exports = dictSearch
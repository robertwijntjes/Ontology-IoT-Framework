const natural = require('natural')
var wordnet = new natural.WordNet()

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

//dictSearch('equipment')
const a = 'something is a unique equipment for blood pressure'
const b = 'special equipement for measuring heart'
dictSearch('heart monitor')

// First take sentence and clean
// next 
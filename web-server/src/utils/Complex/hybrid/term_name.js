const levenshtein = require('fast-levenshtein')

const term_name = (t1,t2) =>{
    return (levenshtein.get(t1,t2))
}

module.exports = term_name
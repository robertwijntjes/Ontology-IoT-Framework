const levenshtein = require('fast-levenshtein')

const term_name = (t1,t2) =>{
    return Math.abs(((levenshtein.get(t1,t2)-0)/(21-0)-1))
}

module.exports = term_name
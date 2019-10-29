const synonym_array = (syn1,syn2) =>{
        return Math.abs(0.1*Math.abs(syn1.length - syn2.length)-1)
}

module.exports = synonym_array
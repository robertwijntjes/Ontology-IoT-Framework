const density = (density1,density2) =>{
    if(density1 > density2){
        return density2/density1
    }
    else{
        return density1/density2
    }
}
module.exports = density


/*

    From Ontology to Semantic Similarity: Calculation of Ontology-Based Semantic Similarity

    PC = n*(n-1)/2

*/
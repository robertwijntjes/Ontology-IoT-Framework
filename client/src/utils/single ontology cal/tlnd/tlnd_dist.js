const tlnd_dist = (ontology) =>{
    return {
        operation:(ontology.FoundNode.level).toFixed(2),
        type:'tlnd_dist',
        input:ontology.FoundNode.nodeName}
}

module.exports = tlnd_dist


/*

Takes the found node and gets its connected_to value and ranks it out of 3 being 
the highest connectivity within the graph. This will give a value which theoretically
corrosponds to its semantic distance in combination with other values.



*/
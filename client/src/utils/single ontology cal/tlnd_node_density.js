const tlnd_node_density = (ontology) =>{
    return {
        operation: ((ontology.FoundNode.linked_to.length + 1)/6).toFixed(2),
        type:'tlnd_node_density',
        input:ontology.FoundNode.nodeName}
}

module.exports = tlnd_node_density


// PC = n*(n-1)/2

/*

Total nodes linked to that node plus one to include itself divided by the 
total number of nodes within the whole graph.


*/
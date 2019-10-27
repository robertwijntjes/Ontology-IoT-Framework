const twohyp_overlap = (ontology) =>{
    return {
        operation:0,
        type:'twohyp_overlap',
        input:ontology.FoundNode.nodeName}
}

module.exports = twohyp_overlap

const relationship = require('./link_cal')

const tlnd_dist = (ontology,size) =>{
    const density = (ontology.FoundNode.linked_to.length + 1)/size
    const depth = (ontology.FoundNode.level)
    const type_of_connection = relationship(ontology.FoundNode.relationship)

    return {
        operation:(((type_of_connection+depth)+density)).toFixed(3),
        type:'tlnd_weight',
        input:ontology.FoundNode.nodeName}
}

module.exports = tlnd_dist
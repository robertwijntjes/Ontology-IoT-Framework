const {link_calculation,ontology_link_cal} = require('./tlnd_link_cal')

const tlnd_dist = (ontology,size) =>{
    const density = (ontology.FoundNode.linked_to.length + 1)/size
    const depth = (ontology.FoundNode.level)
    const type_of_connection = link_calculation(ontology.FoundNode.relationship)
    const attribute = ontology.FoundNode.attributes.length

    return {
        operation:((((type_of_connection+depth)+density)+(attribute/8))).toFixed(3),
        type:'tlnd_weight',
        input:ontology.FoundNode.nodeName}
}

module.exports = tlnd_dist
const links = require('../../../db/models/type_of_link')
const _ = require('underscore')

const link_calculation = (term) =>{
    return _.where(links,{type:term})[0].value 
}

const ontology_link_cal = (ontology) =>{
    return  {operation:_.where(links,{type:ontology.FoundNode.relationship})[0].value ,type:'tlnd_link_cal',input:ontology.FoundNode.nodeName}
}

module.exports = {
    link_calculation,
    ontology_link_cal
}
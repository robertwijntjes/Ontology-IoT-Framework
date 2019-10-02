const links = require('../../../db/models/type_of_link')
const _ = require('underscore')

const link_calculation = (term) =>{
    return _.where(links,{type:term})[0].value 
}

module.exports = link_calculation
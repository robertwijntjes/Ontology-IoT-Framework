const _ = require('lodash')

const same = (object_1,object_2) =>{
    return _.isEqual(object_1,object_2)
}

module.exports = same
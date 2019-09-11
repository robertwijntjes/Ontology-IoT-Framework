const mongoose = require('mongoose');
var Mixed= mongoose.Schema.Types.Mixed;



class ont_node{
    constructor(nodeName,relationship,connected_to,attributes){
        this.nodeName = nodeName
        this.relationship = relationship
        this.connected_to = connected_to
        this.attributes = attributes
    }
}


const nodeSchema = new mongoose.Schema({
        nodeName:{
            type: String,
            required:true,
            trim:true,
        },
        relationship:{
            type: String,
            required: true,
            trim:true
        },
        connected_to:{
            type:  Mixed,
            required: true
        },
        attributes:{
            type: Array,
            required: true
        }
})

const Nodes = mongoose.model('Nodes',nodeSchema)

module.exports = Nodes;
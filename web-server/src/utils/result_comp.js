const density = require('./Complex/TLND/density')
const link_weight = require('./Complex/TLND/link_weight')
const node_depth = require('./Complex/TLND/node_depth')
const type_of_link = require('./Complex/TLND/type_of_link')
// TLND Algorithm

const res_comp = (database,op) =>{
    const result = []
    for(z in op){
        for(x in database){
            for(y in database[x].Response){
                if(database[x].Response[y].type === op[z]){
                    result.push({value:database[x].Response[y].operation,type:op[z]})
                }
                
            }
        }
    }

    const dist = result.map(function(value) {
        if(value.type === op[0]){
            return value
        }
    });

    const density = result.map(function(value) {
        if(value.type === op[1]){
            return value
        }
    });

    const weight = result.map(function(value) {
        if(value.type === op[2]){
            return value
        }
    });

    const link = result.map(function(value) {
        if(value.type === op[3]){
            return value
        }
    });
    console.log({dist:dist,density:density,weight:weight,link:link})
    return ({dist:dist,density:density,weight:weight,link:link})

}

module.exports = res_comp
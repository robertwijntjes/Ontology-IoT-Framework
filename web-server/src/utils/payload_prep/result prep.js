const tlnd_prep = (database,op) =>{
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

const sdamo_prep = (database,op) =>{

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

    const doh =  result.filter(x=>x.type == op[0])
    const scd = result.filter(x=>x.type == op[1])

    return ({depth_of_heirarchy:doh,semantic_bias:doh,semantic_coincidence_degree:scd})

}



module.exports = {
    tlnd_prep,
    sdamo_prep
}

/*

Used for preparing the data collected into fields that can be individually called and access for execution
of calculations such as the TLND,SDAMO,word_sim and newly proposed algorithm.

*/
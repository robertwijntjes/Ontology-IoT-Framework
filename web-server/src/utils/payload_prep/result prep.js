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
    const dist =  result.filter(x=>x.type == op[0])
    const density =  result.filter(x=>x.type == op[1])
    const weight =  result.filter(x=>x.type == op[2])
    const link =  result.filter(x=>x.type == op[3])

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



const slo_prep = (database,op) =>{

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

    const common_prop =  result.filter(x=>x.type == op[0])
    const ancestor_search = result.filter(x=>x.type == op[3])
    const nodename = result.filter(x=>x.type == op[4])
    const antonyms = result.filter(x=>x.type == op[1])
    const synonyms_array = result.filter(x=>x.type == op[2])

    return ({common_prop,antonyms,synonyms_array,ancestor_search,nodename})

}


module.exports = {
    tlnd_prep,
    sdamo_prep,
    slo_prep
}

/*

Used for preparing the data collected into fields that can be individually called and access for execution
of calculations such as the TLND,SDAMO,word_sim and newly proposed algorithm.

*/
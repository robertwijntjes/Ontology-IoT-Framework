const antonyms_array = (ant1,ant2) =>{
    console.log(ant1[0] == undefined)

    if(ant1[0] == undefined && ant2[0] == undefined){
        return 0.2
    }
    if(ant1.length > 0 &&  ant2.length > 0){
        return 0.4
    }
    else{
        return 0
    }
}

module.exports = antonyms_array
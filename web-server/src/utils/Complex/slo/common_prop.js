const common_prop = (prop1,prop2) =>{
    if(prop1 > prop2){
        return prop2/prop1
    }
    if(prop2 > prop1){
        return prop1/prop2
    }
}

module.exports = common_prop
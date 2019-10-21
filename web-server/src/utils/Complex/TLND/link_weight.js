const link_weight = (weight1,weight2) =>{
    if(weight1 > weight2){
        return weight2/weight1
    }
    else{
        return weight1/weight2
    }
}
module.exports = link_weight
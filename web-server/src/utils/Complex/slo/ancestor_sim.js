const _ = require('lodash')
var stringSimilarity = require('string-similarity');

const ancestor_sim = (total_1,total_2) =>{
    if(total_1.length == 1 && total_2.length == 1){
        if(total_1[0] == total_2[0]){
            return (1)*0.3
        }
        if(total_1[0] != total_2[0]){
            return (0/2)*0.3
        }
    }
    else{
        var counter = 0
        var list = total_1
        for(x in total_1){
            for(y in total_2){
                if(stringSimilarity.compareTwoStrings(total_1[x],total_2[y]) >= 0.65){
                    counter +=1
                }
            }
        }
    }


    var array3 = _.union(total_1,total_2)
    console.log({counter:counter,list:array3})
    return (counter/(array3.length))*0.3
}

module.exports = ancestor_sim

const recursiveSearch = (term,currentNode) =>{
    if(currentNode.nodeName == term){
        return currentNode
    }

    if(currentNode.connected_to.length > 0){
        var i
        var temp
        for(i = 0 ; i < currentNode.connected_to.length ; i++){
            temp = recursiveSearch(term,currentNode.connected_to[i])
            if(temp != null){
                return temp
            }
        }
        return null
    }
}


console.log({Result:result})
module.exports = recursiveSearch


// while(currentNode){
    
//     if(currentNode.nodeName == "invasive"){
//         return currentNode
//     }else{
//         var counter = -1
//         while(currentNode.connected_to != null && counter <= currentNode.connected_to.length -2){
//             console.log(counter +=1)
//             if(currentNode.connected_to[counter].nodeName == "invasive"){
//                 currentNode = currentNode.connected_to[counter]
//                 counter = 0
//                 console.log(currentNode)
//                 break
//             }
//             else{
//                 counter += 1
//             }
//         }
//     }
//     break
// }
// Iterative Method


const {link_calculation,ontology_link_cal} = require('../tlnd/tlnd_link_cal')

const linkdest = (term,currentNode,tree) =>{
    // if(currentNode.nodeName == term){
    //     tree.push(link_calculation(currentNode.relationship))
    //     console.log(tree)
    //     return {operation:tree,type:'linkDest',input:term}
    // }


    // if(currentNode.connected_to.length > 0){
    //     var i
    //     var temp
    //     for(i = 0 ; i < currentNode.connected_to.length ; i++){
    //         if(i==0){
    //             tree.push(link_calculation(currentNode.relationship))
    //         }
    //         temp = linkdest(term,currentNode.connected_to[i],tree)
    //         if(temp != null){
    //             return temp
    //         }
    //     }
    //     return null
    // }
    // else{
    //     tree.pop()
    // }
    if(!currentNode){
        return false
    }

    tree.push(link_calculation(currentNode.relationship))

    if(currentNode.nodeName == term){
        return {operation:tree,type:'linkDest',input:term}
    }

    if(currentNode.connected_to.length > 0){
            var i
            for(i = 0; i < currentNode.connected_to.length ; i++ ){
                temp = linkdest(term,currentNode.connected_to[i],tree)
                if(temp){
                    console.log(currentNode.nodeName)
                    return temp
                }
            }
        }
        tree.pop()
        return false
}


module.exports = linkdest
const ancestorSearch = (term,currentNode,tree) =>{
    if(currentNode.nodeName == term){
        tree.push(currentNode.nodeName)
        return {operation:tree,type:'ancestor_search',input:term}
    }
    if(currentNode.nodeName != term && currentNode.connected_to.length < 1){
        tree.pop()
    }

    if(currentNode.connected_to.length > 0){
        var i
        var temp
        for(i = 0 ; i < currentNode.connected_to.length ; i++){
            if(i==0){
                tree.push(currentNode.nodeName)
            }
            temp = ancestorSearch(term,currentNode.connected_to[i],tree)
            if(temp != null){
                return temp
            }
        }
        return null
    }
}

module.exports = ancestorSearch
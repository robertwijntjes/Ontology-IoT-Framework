const fullgraphcal = (currentNode,tree,connections) =>{
    if(currentNode.nodeName == term){
        tree.push(single_density(currentNode.connections,connections))
        return {operation:tree,type:'ancDest',input:term}
    }
    if(currentNode.nodeName != term && currentNode.connected_to.length < 1){
        tree.pop()
    }

    if(currentNode.connected_to.length > 0){
        var i
        var temp
        for(i = 0 ; i < currentNode.connected_to.length ; i++){
            if(i==0){
                tree.push(single_density(currentNode.connections,connections))
            }
            temp = fullgraphcal(term,currentNode.connected_to[i],tree,connections)
            if(temp != null){
                return temp
            }
        }
        return null
    }
}

module.exports = fullgraphcal
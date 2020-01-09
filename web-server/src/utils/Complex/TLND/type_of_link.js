const type_of_link = (link1,link2) =>{
    if(link1 > link2){
        return link2/link1
    }
    else{
        return link1/link2
    }
}


const type_of_links = (links1,links2)=>{
    const a = links1.reduce((a,b) => a + b, 0)
    const b = links2.reduce((a,b) => a + b, 0)
    if(a > b){
        return b/a
    }
    else{
        return a/b
    }
}
module.exports = {
    type_of_link,
    type_of_links
}
const type_of_link = (link1,link2) =>{
    if(link1 > link2){
        return link2/link1
    }
    else{
        return link1/link2
    }
}
module.exports = type_of_link
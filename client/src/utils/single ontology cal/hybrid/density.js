const single_density = (node,{connects,max,min}) =>{
    return node/connects
}


const list_density = () =>{
    return 0
}

module.exports = {
    single_density,
    list_density
}
const sb = (depth_1,depth_2) => {
    return ((depth_1 - depth_2)/(depth_1 + depth_2))*-0.1
}

module.exports = sb

/*

((Depth(a) - Depth(b)) / Distance(a,b)) * Neg-Modifier

*/
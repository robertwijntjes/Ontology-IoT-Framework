
const non_bias_pos = (distance,density,dist_dense,norm_distance) => {
    var result_a = 0
    var result_b = 0
    console.log((distance*density))
    console.log((norm_distance*dist_dense))
    return ((distance*density) + (norm_distance*dist_dense))
    

}

module.exports = non_bias_pos

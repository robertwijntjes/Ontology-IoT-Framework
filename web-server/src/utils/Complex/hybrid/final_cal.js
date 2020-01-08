
const non_bias_pos = (distance,density,dist_dense,norm_distance,levenstein,link_compare) => {

    return ((distance*density) + (norm_distance*dist_dense)) + levenstein + link_compare
    

}

module.exports = non_bias_pos

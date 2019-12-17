
const distance_jia = (depth_1,depth_2,max1,max2) => {
    return 1/(Math.abs(depth_1-depth_2)+1)
}

module.exports = distance_jia

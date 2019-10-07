
const doh = (depth_1,depth_2) => {
    const height = depth_2+depth_1/2
    return ((depth_1 + depth_2)/(2*height))*0.95
}

module.exports = doh


/*
(Depth(a) + Depth(b)) / 2(Depth(o)) * Modifier

*/
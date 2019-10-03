
const doh = (depth_1,depth_2,height) => {
    if(height == 'three'){
        height = 3
    }
    if(height == 'four'){
        height = 4
    }
    return ((depth_1 + depth_2)/(height*2))*(0.3)
}

module.exports = doh


/*
(Depth(a) + Depth(b)) / 2(Depth(o)) * Modifier

*/
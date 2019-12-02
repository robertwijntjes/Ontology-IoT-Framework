
const distance = (depth_1,depth_2,max1,max2) => {
        return Math.abs((Math.abs(depth_1 - depth_2)+1)/((max1+max2)/2)-1)
}

module.exports = distance


/*
        NodeDistance(a,b)= {■(1,&a+b=0@(|(dist(a)-dist(b))+1|/(〖depth(a)〗_max+ 〖depth(b)〗_max ))^(-1),&a+b≠0 )┤s
*/
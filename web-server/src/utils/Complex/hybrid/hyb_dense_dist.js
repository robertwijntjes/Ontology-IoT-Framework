const denselist = (list1,list2,density1,density2) => {
    const a = list1.reduce((a,b) => a + b, 0)
    const b = list2.reduce((a,b) => a + b, 0)
    return Math.abs(a + b)/((density1+density2)/2)
}

module.exports = denselist


/*
    DenseDist(a,b)=〖((∑▒link(a,b) )/(∑▒〖〖(density(a)〗_max+density(b)_max) 〗))〗^(-1)  
*/
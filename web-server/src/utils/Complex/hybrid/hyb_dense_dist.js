const dense_dist = (list1,list2,density1,density2) => {
    const a = list1.reduce((a,b) => a + b, 0)*(1/list1.length)
    const b = list2.reduce((a,b) => a + b, 0)*(1/list2.length)


    return (((a+b)/(density1+density2))-.23)/(0.29-0.23)
}

module.exports = dense_dist


/*
    DenseDist(a,b)=〖((∑▒link(a,b) )/(∑▒〖〖(density(a)〗_max+density(b)_max) 〗))〗^(-1)  


    equip equip 0.27% close
                26.5 further
                25
                
*/
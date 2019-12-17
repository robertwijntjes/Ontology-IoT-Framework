const density = (list1,list2,density1,density2) => {
    const a = list1.reduce((a,b) => a + b, 0)*(1/list2.length)
    const b = list2.reduce((a,b) => a + b, 0)*(1/list2.length)

    //console.log(Math.abs((Math.abs(a - b)/((density1+density2/2))-.30)/(0.49 -0.2000000000)-1))
    console.log({a:a,b:b})
    const result = (Math.abs(a - b)/(density1+density2/2))

    return  Math.abs((result - 0)/(3.0-0)-1)
}

module.exports = density

/*
    NodeDensity(a,b)=(〖(|∑▒ancestor(a) -∑▒ancestor(b)   |)/(∑▒〖〖(density(a)〗_max+density(b)_max) 〗))〗^(-1)


    0.29166/ 0.2945
*/
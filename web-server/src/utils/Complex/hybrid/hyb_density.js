const density = (list1,list2,density1,density2) => {
    const a = list1.reduce((a,b) => a + b, 0)*(1/list2.length)
    const b = list2.reduce((a,b) => a + b, 0)*(1/list2.length)

    //console.log({result:(Math.abs(a - b)/((density1+density2/2))-.10000000000)/(0.5 -0.10000000000),finish_result:Math.abs((Math.abs(a - b)/((density1+density2/2))-.10000000000)/(0.4 -0.10000000000)-1)})
    console.log({
        result_before: Math.abs(a - b)/((density1+density2/2)),
        result_After: (Math.abs(a - b)/((density1+density2/2))-.20000000000)/(0.53 -0.20000000000),
        result_complete: Math.abs((Math.abs(a - b)/((density1+density2/2))-.200000000)/(0.53 -0.2000000000)-1)
    })
    return  Math.abs((Math.abs(a - b)/((density1+density2/2))-.200000000)/(0.53 -0.2000000000)-1)
}

module.exports = density

/*
    NodeDensity(a,b)=(〖(|∑▒ancestor(a) -∑▒ancestor(b)   |)/(∑▒〖〖(density(a)〗_max+density(b)_max) 〗))〗^(-1)


    0.29166/ 0.2945
*/
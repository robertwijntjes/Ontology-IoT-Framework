const scd = (total_1,total_2) =>{
    return total_1
    .filter(element => total_2.includes(element))
    .length/(total_1.length + total_2.length)
}

module.exports = scd
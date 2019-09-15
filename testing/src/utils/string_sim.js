const stringsim = require('string-similarity')


const stringSim = (string_1,string_2) =>{
    const result = stringsim.compareTwoStrings(string_1,string_2)
    console.log(result)
}

stringSim('a medical instrument used to inject or withdraw fluids','a piece of electronic equipment for continual observation of the function of the heart')

const request = require('request')
const rp = require('request-promise')
// Packages

const {option_1,option_2,option_3,option_4 } = require('../db/options/options_cl4')
// System options

async function RequestLineExecute() {
    const data = {}

    await rp(option_1)
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // First funciton execution

    await rp(option_2)    
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // // // Second Function Execution

    await rp(option_3)    
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // Third Function Execution

    
    await rp(option_4)    
    .then(function (parsedBody) {
        console.log(parsedBody)
    })
    .catch(function (err) {
        console.log(err)
    });
    // Fourth Function Execution
}

RequestLineExecute()
.catch(error=> console.log)









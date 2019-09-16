const request = require('request')


const simcheck = (text_1,text_2) =>{
    request.post({
    
        url:"https://apis.paralleldots.com/v4/similarity",
        form:{
            api_key:'1jGHx7NnuMZSztnfLmpNH5uhiSKv8z5MbMic1GbCvZY',
            text_1,
            text_2
        }
    }, 
    (error , res , body)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(body)
        }
    })
}

module.exports = simcheck
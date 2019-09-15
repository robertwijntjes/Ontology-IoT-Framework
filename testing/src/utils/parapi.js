const request = require('request')

request.post({
    
    url:"https://apis.paralleldots.com/v4/similarity",
    form:{
        api_key:'1jGHx7NnuMZSztnfLmpNH5uhiSKv8z5MbMic1GbCvZY',
        text_1:'dogs and dogs',
        text_2:'cats and cats'
    }
}, 
(error , res , body)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(body)
    }
    //console.log(res)
})
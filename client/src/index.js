const request = require('request')



const data = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "http://www.example.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "http://www.example.com/search?&q={query}",
        "query-input": "required"
      }
    },
    {
      "@context": "http://schema.org",
      "@type": "Article",
      "author": "John Doe",
      "interactionCount": [
        "UserTweets:1203",
        "UserComments:78"
      ],
      "name": "How to Tie a Reef Knot"
    }
  ]

request.post({
    
    url:"http://127.0.0.1:3000/interface/data",
    json: data
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

/*
1. 
  Test 1: Send a single request of data and let the server process it individually.
  Test 2: Send two requests and let the server process the two together.

  


*/
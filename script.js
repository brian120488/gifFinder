$(document).ready(function(){
    

    $("#findBtn").click(function(e) {
        e.preventDefault();
        /* Below, we declare our variables that will be used for our API request url
        * notice how we take our initial string an cut it down to something that is easier to read using
        * template strings
        */ 
        //let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=birds&api_key=qIp4FtndglssrZT2Ce1cBIL2GhyWt38q&limit=6");

        let url = "http://api.giphy.com/v1/gifs/search?q=";
        let query = $("input:text").val();
        let key = "qIp4FtndglssrZT2Ce1cBIL2GhyWt38q";
        let limit = 9;
        let xhr = $.get(`${url}${query}${"&api_key="}${key}${"&limit="}${limit}`);
        
        //Once our request is 'done', we want to make sure we store that date in a parameter called response

        xhr.done(function(response) { 
        //logging our response to see that we have been successful in our request    
            console.log("success got data", response); 
        //Then we assign the response's data (our object) to gifs, making gifs our new object    
            let gifs = response.data
        
        //Finally, using a for-in loop, we are then able to traverse our object and obtain the specific data we wish to use,
        //in this case, it's our gif url that's found in property>images>original>url. This is how we get our gifs on screen!    
            for(property in gifs){
                $('#results').append(`<img src= ${gifs[property].images.original.url} style='height:350px; width:350px;'/>`);
            }
        });
        
    });
});
$(document).ready(function(){
    

    $("#findBtn").click(function(e) {
        e.preventDefault();
        let url = "http://api.giphy.com/v1/gifs/search?q=";
        let query = $("input:text").val();
        let key = "qIp4FtndglssrZT2Ce1cBIL2GhyWt38q";
        let limit = 9;
        let xhr = $.get(`${url}${query}${"&api_key="}${key}${"&limit="}${limit}`);
        
        //let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=birds&api_key=qIp4FtndglssrZT2Ce1cBIL2GhyWt38q&limit=6");
        
        xhr.done(function(response) { 
            console.log("success got data", response); 
            let gifs = response.data

            for(property in gifs){
                $('#results').append(`<img src= ${gifs[property].images.original.url} style='height:350px; width:350px;'/>`);
            }
        });
        
    });
});
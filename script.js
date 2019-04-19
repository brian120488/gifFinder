$(document).ready(function(){
    console.log("i am ready");
    
    
    
    //javascript, jQuery
    //use the following two lines to print a json response
    //jquery handler on go button
    //let api_key = "qIp4FtndglssrZT2Ce1cBIL2GhyWt38q";
    $("#findBtn").click(function(e) {
        var input = $("input:text").val();
        e.preventDefault();
        console.log(input);
        
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=qIp4FtndglssrZT2Ce1cBIL2GhyWt38q&limit=6");
        xhr.done(function(response) { 
            console.log("success got data", response); 

            var gifs = response.data

            for(property in gifs){
                $('#results').append("<img src='"+gifs[property].images.original.url+"' style='height:350px; width:350px;'/>");
            }
        });
        //loop through data and print
    });
});
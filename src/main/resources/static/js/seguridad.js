//$.get(URL,callback);
// The required URL parameter specifies the URL you wish to request.
// The optional callback parameter is the name of a function to be executed if the request succeeds.
// https://www.w3schools.com/jquery/html_html.asp
//$(selector).html(content)

$.get("/user" ,function (data){
    //console.log(data);
    $("#user").html(data.name);
    $(".unauthenticated").hide();
    $(".authenticated").show();
    }
);
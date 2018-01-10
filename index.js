var express = require("express"),
    app = express(),
    host = "127.0.0.1",
    port = 8080;

app.get("/", function(request, response) {
    response.send("Hello!!");
});

app.listen(port, host, function(){
    console.log("Listening....");
});
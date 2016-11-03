var fs = require('fs');

module.exports = function(request, response){
    var ourRequest = request.url.split("/")
    ourRequest.shift()
    console.log(ourRequest)
    console.log("The request method is: " + request.method)
    if (request.method == "POST"){
        // console.log(request)
        console.log("The request POST is: " + request[1])
    }
    



    switch(ourRequest[0]){
        case "":
            fs.readFile('views/index.html', 'utf8', function(errors, contents){
                response.writeHead(200,{ 'Content-type': 'text/html'});
                response.write(contents);
                response.end();
            });
            break
        case "cars":
            if (ourRequest.length == 2 && ourRequest[1] === 'new'){
                fs.readFile('views/carnew.html', 'utf8', function(errors, contents){
                    response.writeHead(200,{ 'Content-type': 'text/html'});
                    response.write(contents);
                    response.end();
                }); 
            } else {
                fs.readFile('views/cars.html', 'utf8', function(errors, contents){
                    response.writeHead(200,{ 'Content-type': 'text/html'});
                    response.write(contents);
                    response.end();
                }); 
            }
            break
        case "cats":
            fs.readFile('views/cats.html', 'utf8', function(errors, contents){
                response.writeHead(200,{ 'Content-type': 'text/html'});
                response.write(contents);
                response.end();
            });
            break
    }

    if (ourRequest[0] === 'stylesheets'){
        fs.readFile('stylesheets/'+ourRequest[1], 'utf8', function(errors, contents){
            response.writeHead(200,{ 'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        }); 
    }

    if (ourRequest[0] === 'images'){
        fs.readFile('images/'+ourRequest[1], function(errors, contents){
            response.writeHead(200,{ 'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        }); 
    }
}

//express lib
var express = require('express');
//util lib
var util = require('util');

var bind = require('bind');

//array unidimensionale contenente il nome degli items
var prenotazione = [];

//instantiate express
var app = express();
//importo script css e immagini sul server
app.use('/scripts', express.static(__dirname + '/scripts'));

app.use('/css', express.static(__dirname + '/css'));

app.use('/img', express.static(__dirname + '/img'));


//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', (process.env.PORT || 1337));

//use: for both POST and GET
app.use('/', function(request, response)
{
	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";

        //content of the post
		if ( typeof request.body.primo !== 'undefined' && request.body.primo)
			prenotazione.push(request.body.primo);
		else
			prenotazione.push("none");

		if ( typeof request.body.secondo !== 'undefined' && request.body.secondo)
    		prenotazione.push(request.body.secondo);
		else
			prenotazione.push("none");

		if ( typeof request.body.contorno !== 'undefined' && request.body.contorno)
    		prenotazione.push(request.body.contorno);
		else
			prenotazione.push("none");

		if ( typeof request.body.dessert !== 'undefined' && request.body.dessert)
    		prenotazione.push(request.body.dessert);
		else
			prenotazione.push("none");


		//bind to template
		bind.toFile('tpl/home.tpl',
		{

	    },
	    function(data)
	    {
	        //write response
	        response.writeHead(200, {'Content-Type': 'text/html'});
	        response.end(data);
	    }); 


	 console.log("riepilogo",prenotazione.pop());
	}
	else
	{ // se non arriva il body
		text = "body undefined";
		response.writeHead(400, {'Content-Type': 'text/html'});
        response.end(text);
	}

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



















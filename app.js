// SayWhat Server Application
// TODO: Full test coverage
'use strict';

var fs				=	require('fs'),

	http			=	require('http'),
	express			=	require('express'),
	errorHandler	=	require('errorhandler'),

	// command line arguments
	argv			=	require('minimist')(process.argv.slice(2)),
	// app environment
	env				=	(process.env['NODE_ENV'] || argv.e) || 'local',

	app				=	express(),

	index_html 		=	fs.readFileSync(__dirname + '/public/index.html').toString(),
	
	sendIndex 		=	function(req,res) {
							res.send(index_html);
						};

app.set('port', process.env.PORT || (argv.p || 8666));

// static file server
app.use(express.static(__dirname + '/public'));

// override index.html with angular app
app.get('*', sendIndex);

// configure error handling appropriate for environment
if(env=='local' || env=='dev') {
	app.use(errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
} else {
	app.use(errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
	console.log("TellMe App Running: ", app.get('port'));
});

//
var http = require('http');
//
var url = require('url');
//
http.createServer(function(req, res){
        // Accepting query string paramters
	var qs = url.parse(req.url,true).query;

	var method = qs.method;
	var x = parseFloat(qs.x);
	var y = parseFloat(qs.y);

	// if..else statements
	if(method == 'add')
                {
		res.write('Output:' + x + ' + ' + y + ' = ' + (x+y));
                }
	else if(method == 'substract')
                {
		res.write('Output:' + x + ' - ' + y + ' = ' + (x-y));
                }
	else if(method == 'multiply')
                {
		res.write('Output:' + x + ' * ' + y + ' = ' + (x*y));
                }
	else if(method == 'divide')
                {
		res.write('Output:' + x + ' / ' + y + ' = ' + (x/y));
                }
	else
                {
		res.write('Invalid Method');
                }
res.end();
	
}).listen(3000);
// contatooh/server.js
var http = require('http');
var app = require('./config/express')();
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na portaa ' +
              app.get('port'));
});

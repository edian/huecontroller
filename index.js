/**
 * Created by sytedian on 4/16/17.
 */
var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
//var db = require('./test.js');
//var db = require('sql.js');


var hue = require('./routes/controlHue');

app.set('port', process.env.PORT || 8080);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){

    console.log(req.body);
    res.sendFile(__dirname + '/views/controlLight.html');

});


app.post('/hue', hue.controlHue);

var port = app.get('port');
var server = http.listen(port , function(){
    console.log("listening on http://localhost:" + port);
});
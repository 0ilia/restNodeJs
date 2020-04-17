var express = require('express');
var expressWs = require('express-ws');

var expressWs = expressWs(express());
var app = expressWs.app;


app.ws('/', function(ws, req) {
    ws.on('message', function(msg) {
        console.log(msg);
    });
    console.log('socket', req.testing);
});

app.listen(3000);
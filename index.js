var express = require('express'),
    url = require('url');
    path = require('path'),
    bodyParser = require('body-parser'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    emailControllers = require('./controller/emailAPI.js');

// Liberar acesso aos broswer
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Accept, X-api-key, X-auth-token, Content-Type, Content-Length');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.headers && req.headers.authorization) { delete req.headers.authorization; }
    next();
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

// Ferramenta utilizada para trajetória de arquivo
app.use(express.static(path.join(__dirname, '/frontEnd-MaoOuro')));


app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// Inicializar a cliente
app.get('/*', function (req, res) {
  res.sendfile('frontEnd-MaoOuro/index.html');
});

// Chamar o servidor
server.listen('192.168.100.189', 8080);

server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});


// Endpoints
app.post('/registrar-email', emailControllers.sendToEmail);

var restify = require('restify');

//添加路由表
var router = require("./routerList.js");

function onListened() {
  console.log('Node server starts at 8000.');
}

function onConnected(req, res) {
  router.handleRoute(req.url, req, res);
}

var server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post(/^\/(.*)/, onConnected);

server.listen(8000, onListened);
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-register')({
  presets: ['react', 'es2015']
});

var app = (0, _express2.default)();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ServerRouter = require('./ServerRouter.react');

app.get('*', function (request, response) {
  var html = ReactDOMServer.renderToString(React.createElement(ServerRouter, { url: request.url }));
  response.send(html);
});

var PORT = 3000;
app.listen(PORT, function () {
  console.log('http://localhost:' + PORT);
});
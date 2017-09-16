'use strict';

var React = require('react');
var StaticRouter = require('react-router').StaticRouter;
var IndexPage = require('../components/IndexPage.react').IndexPage;
var Layout = require('../components/Layout.react').Component;
require('babel-core').transform('code', {
  presets: ['react']
});

module.exports = function ServerRouter(url) {
  console.log(url);
  return React.createElement(
    StaticRouter,
    null,
    React.createElement(
      Layout,
      null,
      React.createElement(IndexPage, null)
    )
  );
};
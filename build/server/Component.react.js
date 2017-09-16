'use strict';

var React = require('react');
var IndexPage = require('../components/IndexPage.react');

module.exports = React.createClass({
  displayName: 'exports',

  _handleClick: function _handleClick() {
    alert();
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(IndexPage, null)
    );
  }
});
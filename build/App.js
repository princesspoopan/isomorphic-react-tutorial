'use strict';

var _AppRoutes = require('./AppRoutes.react');

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_AppRoutes2.default, null), document.getElementById('main'));
};
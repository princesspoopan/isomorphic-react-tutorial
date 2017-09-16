'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error404Page;

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Error404Page() {
  return _react2.default.createElement(
    'div',
    { className: 'error-404-page' },
    _react2.default.createElement(
      'h1',
      null,
      '404'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'No Meow with this name'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Go back to the main page'
      )
    )
  );
}
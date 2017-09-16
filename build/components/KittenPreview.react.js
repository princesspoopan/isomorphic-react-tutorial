'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KittenPreview;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KittenPreview(_ref) {
  var name = _ref.name,
      avatar = _ref.avatar;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      name
    ),
    _react2.default.createElement('img', { src: avatar })
  );
}
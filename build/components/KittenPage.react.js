'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KittenPreview = require('./KittenPreview.react');

var _KittenPreview2 = _interopRequireDefault(_KittenPreview);

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _kittens = require('../data/kittens');

var _kittens2 = _interopRequireDefault(_kittens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KittenPage = function (_React$Component) {
  _inherits(KittenPage, _React$Component);

  function KittenPage() {
    _classCallCheck(this, KittenPage);

    return _possibleConstructorReturn(this, (KittenPage.__proto__ || Object.getPrototypeOf(KittenPage)).apply(this, arguments));
  }

  _createClass(KittenPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var kitten = _kittens2.default.find(function (kitten) {
        return kitten.name === _this2.props.match.params.name;
      });
      return _react2.default.createElement(
        'div',
        { className: 'kitten-preview' },
        _react2.default.createElement(_KittenPreview2.default, kitten),
        _react2.default.createElement(
          'div',
          { className: 'navigateBack' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            '\xAB\xAB Back to the index'
          )
        )
      );
    }
  }]);

  return KittenPage;
}(_react2.default.Component);

module.exports = KittenPage;
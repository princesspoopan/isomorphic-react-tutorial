'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = require('react-router-dom');

var _Error404Page = require('./components/Error404Page.react');

var _Error404Page2 = _interopRequireDefault(_Error404Page);

var _IndexPage = require('./components/IndexPage.react');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _KittenPage = require('./components/KittenPage.react');

var _KittenPage2 = _interopRequireDefault(_KittenPage);

var _Layout = require('./components/Layout.react');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRoutes = function (_React$Component) {
  _inherits(AppRoutes, _React$Component);

  function AppRoutes() {
    _classCallCheck(this, AppRoutes);

    return _possibleConstructorReturn(this, (AppRoutes.__proto__ || Object.getPrototypeOf(AppRoutes)).apply(this, arguments));
  }

  _createClass(AppRoutes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _Layout2.default,
          null,
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _IndexPage2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/kittens/:name', exact: true, component: _KittenPage2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { component: _Error404Page2.default })
          )
        )
      );
    }
  }]);

  return AppRoutes;
}(_react2.default.Component);

exports.default = AppRoutes;


module.exports.AppRoutes = AppRoutes;
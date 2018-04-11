'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Ripple = require('./Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp2 = _class = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'getRect',
    value: function getRect() {
      return ReactDOM.findDOMNode(this._el).getBoundingClientRect();
    }
  }, {
    key: 'isRaised',
    value: function isRaised() {
      return this.props.modifiers.split(' ').indexOf('raised') > -1;
    }
  }, {
    key: 'isIcon',
    value: function isIcon() {
      return this.props.modifiers.split(' ').indexOf('icon') > -1;
    }
  }, {
    key: 'handleDown',
    value: function handleDown(event) {
      var rect = this.getRect();
      var center = this.isIcon();
      this._ripple.start({ rect: rect, event: event, center: center, round: center });
      if (this.props.onMouseDown) {
        this.props.onMouseDown(event);
      }
    }
  }, {
    key: 'handleUp',
    value: function handleUp(event) {
      this._ripple.stop();
      if (this.props.onMouseUp) {
        this.props.onMouseUp(event);
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      var _this2 = this;

      setTimeout(function (_) {
        _this2._showFocusRipple();
        _this2._el.focus();
        _this2.setState({ focus: true });
      }, 200);
    }
  }, {
    key: '_showFocusRipple',
    value: function _showFocusRipple() {
      this._ripple.start({
        rect: this.getRect(),
        center: true,
        round: this.isIcon(),
        pulsate: this.isRaised() ? true : false
      });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      this._showFocusRipple();
      this.setState({ focus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      if (this._ripple) {
        this._ripple.stop();
      }
      this.setState({ focus: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var modifiers = [].concat(_toConsumableArray(this.props.modifiers.split(' ')), [this.state.focus ? 'focused' : false]).filter(Boolean);
      var baseCls = 'q-mui-button';
      var classes = [baseCls, this.props.className].concat(_toConsumableArray(modifiers.map(function (m) {
        return baseCls + '_' + m;
      }))).join(' ');
      var props = _extends({}, this.props);
      delete props['className'];
      delete props['modifiers'];
      props = _extends({}, props, {
        className: classes,
        onMouseDown: this.handleDown.bind(this),
        onMouseUp: this.handleUp.bind(this),
        onFocus: this.handleFocus.bind(this),
        onBlur: this.handleBlur.bind(this),
        ref: function ref(el) {
          return _this3._el = el;
        }
      });
      delete props['container'];
      var children = [React.createElement(_Ripple2.default, { ref: function ref(el) {
          return _this3._ripple = el;
        }, key: 'ripple' }), React.createElement(
        'span',
        { className: baseCls + '__container', key: 'content' },
        this.props.children
      )];
      var container = React.createElement(
        'button',
        props,
        children
      );
      if (this.props.container) {
        container = React.cloneElement(this.props.container, props, children);
      }
      return container;
    }
  }]);

  return Button;
}(React.Component), _class.defaultProps = {
  modifiers: '',
  className: ''
}, _temp2);
exports.default = Button;
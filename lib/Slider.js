'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = (_temp = _class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this._active = false;
    _this.handleWindowMove = _this._handleWindowMove.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('mousemove', this.handleWindowMove);
      this.setValue(this.props.value);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('mousemove', this.handleWindowMove);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value != nextProps.value && nextProps.hasOwnProperty('value')) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'getValueByMousePosition',
    value: function getValueByMousePosition(_ref) {
      var x = _ref.x,
          y = _ref.y;

      var sliderEl = ReactDOM.findDOMNode(this._sliderEl);
      var sliderRect = sliderEl.getBoundingClientRect();
      x = x - sliderRect.x;
      var width = sliderRect.width;
      var value = x / width * (this.props.max - this.props.min) + this.props.min;
      if (value < this.props.min) {
        value = this.props.min;
      }
      if (value > this.props.max) {
        value = this.props.max;
      }
      return Math.ceil(value);
    }
  }, {
    key: '_handleWindowMove',
    value: function _handleWindowMove(e) {
      if (e.buttons !== 1) {
        this._active = false;
      }
      if (!this._active) {
        return;
      }
      var value = this.getValueByMousePosition({ x: e.screenX, y: screenY });
      this.setValue(value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var offset = value * 100 / (this.props.max - this.props.min);
      ReactDOM.findDOMNode(this._pointEl).style.left = offset + '%';
      ReactDOM.findDOMNode(this._activeLineEl).style.width = offset + '%';
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this._active = true;
    }
  }, {
    key: 'handleAreaClick',
    value: function handleAreaClick(e) {
      var value = this.getValueByMousePosition({ x: e.screenX, y: screenY });
      this.setValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var baseCls = 'q-mui-slider';
      var _props = this.props,
          modifiers = _props.modifiers,
          className = _props.className;

      modifiers = modifiers.split(/\s+/);
      var cls = (0, _classnames2.default)([baseCls, className].concat(_toConsumableArray(modifiers.map(function (m) {
        return baseCls + '_' + m;
      }))));
      return React.createElement(
        'div',
        { className: cls, ref: function ref(el) {
            return _this2._sliderEl = el;
          } },
        React.createElement('div', {
          className: baseCls + '__click-area',
          onClick: this.handleAreaClick.bind(this) }),
        React.createElement('div', { className: baseCls + '__line' }),
        React.createElement('div', {
          ref: function ref(el) {
            return _this2._activeLineEl = el;
          },
          className: baseCls + '__active-line' }),
        React.createElement('div', {
          ref: function ref(el) {
            return _this2._pointEl = el;
          },
          className: baseCls + '__point',
          onDragStart: function onDragStart(e) {
            return e.preventDefault();
          },
          onMouseDown: this.handleMouseDown.bind(this) })
      );
    }
  }]);

  return Slider;
}(React.Component), _class.defaultProps = {
  modifiers: '',
  min: 0,
  max: 100,
  value: 0
}, _temp);
exports.default = Slider;
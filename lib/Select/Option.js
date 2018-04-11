'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Ripple = require('../Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this._mouseDown = false;

    _this.onDocumentMouseUp = _this._onDocumentMouseUp.bind(_this);
    return _this;
  }

  _createClass(Option, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onDocumentMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        if (nextProps.active) {
          this._ripple.start({
            rect: this.getRect(),
            center: true,
            pulsate: true
          });
        } else {
          this._ripple.stop();
        }
      }
    }
  }, {
    key: '_onDocumentMouseUp',
    value: function _onDocumentMouseUp(e) {
      if (e.button !== 0) {
        return;
      }
      this.props.onClickOutside(e);
    }
  }, {
    key: 'getRect',
    value: function getRect() {
      return ReactDOM.findDOMNode(this._el).getBoundingClientRect();
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      if (event.button !== 0) {
        return;
      }
      this._mouseDown = true;
      this.props.onMouseDown(event);
      var rect = this.getRect();
      this._ripple.start({ rect: rect, event: event });
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var _this2 = this;

      event.stopPropagation();
      if (event.button !== 0) {
        return;
      }
      this._mouseDown = false;
      this._ripple.stop();
      setTimeout(function () {
        return _this2.props.onMouseUp(event);
      }, 200);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref,
          _this3 = this;

      var baseCls = 'q-mui-option';
      var cls = (0, _classnames2.default)([baseCls, (_ref = {}, _defineProperty(_ref, baseCls + '_active', this.props.active), _defineProperty(_ref, baseCls + '_divide-after', this.props.divideAfter), _defineProperty(_ref, baseCls + '_divide-before', this.props.divideBefore), _ref)]);
      return React.createElement(
        'div',
        {
          className: cls,
          onMouseDown: this.handleMouseDown.bind(this),
          onMouseUp: this.handleMouseUp.bind(this),
          ref: function ref(el) {
            return _this3._el = el;
          } },
        React.createElement(_Ripple2.default, { ref: function ref(el) {
            return _this3._ripple = el;
          } }),
        React.createElement(
          'div',
          { className: baseCls + '__container' },
          this.props.label
        )
      );
    }
  }]);

  return Option;
}(React.Component);

exports.default = Option;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = (_temp2 = _class = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.isOpen = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popover, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isOpen) {
        this.el = document.createElement('div');
        this.el.className = 'q-mui-popover';
        this.el.style.position = 'fixed';
        this.el.style.left = 0;
        this.el.style.top = 10;
        this.el.style.zIndex = opts.zIndex || 1000;
        this.el.style.width = 30;
        this.el.style.height = 30;
        this.el.style.background = 'red';
        // this.constrolBodyScroll();
        this.calcPosition(opts.targetEl);
        document.body.appendChild(this.el);
        this.portal = ReactDOM.createPortal(this.props.children, this.el);
        this.isOpen = true;
      }
    }
  }, {
    key: 'calcPosition',
    value: function calcPosition(targetEl) {
      var target = ReactDOM.findDOMNode(targetEl);
      var targetRect = target.getBoundingClientRect();
      var _targetRect$top = targetRect.top,
          top = _targetRect$top.top,
          left = _targetRect$top.left;
    }
  }, {
    key: 'close',
    value: function close() {
      document.body.removeChild(this.el);
      document.body.style.overflow = null;
      this.isOpen = false;
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {}
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Popover;
}(React.Component), _class.defaultProps = {
  // hPos: ['center', 'center'],
  // vPos: ['bottom', 'top'],
}, _temp2);
exports.default = Popover;
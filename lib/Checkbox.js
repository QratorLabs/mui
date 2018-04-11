'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Ripple = require('./Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (_temp2 = _class = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _this.baseCls = 'q-mui-checkbox', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      this.setState({ focus: true });
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      this.setState({ focus: false });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'getIcon',
    value: function getIcon() {
      var icon = void 0,
          checked = this.props.value;
      if (checked) {
        icon = this.props.checkedIcon;
      } else {
        icon = this.props.uncheckedIcon || this.props.checkedIcon;
      }
      var content = null;
      var baseCls = this.baseCls + '-icon';
      if (icon) {
        var cls = (0, _classnames2.default)([baseCls, baseCls + '_' + (checked ? 'check' : 'uncheck')]);
        content = React.createElement(
          'div',
          { className: cls, key: checked },
          icon
        );
      }
      return React.createElement(
        _reactTransitionGroup.CSSTransitionGroup,
        {
          transitionName: baseCls,
          transitionEnterTimeout: 800,
          transitionLeaveTimeout: 500 },
        content
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2;

      var cls = (0, _classnames2.default)([this.baseCls, (_ref2 = {}, _defineProperty(_ref2, this.baseCls + '_focus', this.state.focus), _defineProperty(_ref2, this.baseCls + '_checked', this.props.value), _defineProperty(_ref2, this.baseCls + '_disabled', this.props.disabled), _defineProperty(_ref2, this.baseCls + '_with-icon', this.props.checkedIcon || this.props.uncheckedIcon), _ref2)]);
      var props = _extends({}, this.props),
          children = props.children;

      props.checked = props.value ? true : false;

      delete props['value'];
      delete props['children'];
      delete props['checkedIcon'];
      delete props['uncheckedIcon'];
      return React.createElement(
        'div',
        { className: cls },
        this.getIcon(),
        children,
        React.createElement('input', _extends({
          type: 'checkbox'
        }, props, {
          onBlur: this.handleBlur.bind(this),
          onFocus: this.handleFocus.bind(this),
          onChange: this.handleChange.bind(this) }))
      );
    }
  }]);

  return Checkbox;
}(React.Component), _class.defaultProps = {
  checkedIcon: null,
  uncheckedIcon: null
}, _temp2);
exports.default = Checkbox;
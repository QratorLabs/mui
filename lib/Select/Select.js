'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (_temp2 = _class = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      label: null,
      focus: false,
      activeOptionIndex: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.value !== undefined) {
        var opt = this.props.options.find(function (o) {
          return o.value === _this2.props.value;
        });
        if (opt) {
          this.setState({ label: opt.label, empty: false });
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.value !== undefined) {
        var label = null;
        var opt = this.props.options.find(function (o) {
          return o.value === _this3.props.value && o.value !== undefined;
        });
        if (opt) {
          label = opt.label;
        } else {
          label = '';
        }
        this.setState({ label: label, empty: !Boolean(label) });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var label = null;
      if (nextProps.value !== undefined) {
        var opt = nextProps.options.find(function (o) {
          return o.value === nextProps.value && o.value !== undefined;
        });
        if (opt) {
          label = opt.label;
        } else {
          label = '';
        }
      }
      this.setState({ label: label, empty: !Boolean(label) });
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
      if (!this._optionDown) {
        this.setState({ focus: false, activeOptionIndex: undefined });
        if (this.props.onBlur) {
          this.props.onBlur(e);
        }
      }
    }
  }, {
    key: 'handleOptionMouseDown',
    value: function handleOptionMouseDown(e) {
      this._optionDown = true;
    }
  }, {
    key: 'handleOptionMouseUp',
    value: function handleOptionMouseUp(i, e) {
      this._optionDown = false;
      this.setState({ focus: false });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
      this.handleChange(e, i);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (this.state.activeOptionIndex === undefined) {
        this.setState({ activeOptionIndex: 0 });
      } else {
        if (e.keyCode == 40) {
          if (this.state.activeOptionIndex < this.props.options.length - 1) {
            this.setState({ activeOptionIndex: this.state.activeOptionIndex + 1 });
          }
        } else if (e.keyCode == 38) {
          if (this.state.activeOptionIndex > 0) {
            this.setState({ activeOptionIndex: this.state.activeOptionIndex - 1 });
          }
        } else if (e.keyCode == 13) {
          e.preventDefault();
          this.handleChange(e, this.state.activeOptionIndex);
        }
      }
      if (e.keyCode !== 13 && e.keyCode !== 9) {
        e.preventDefault();
      }
    }
  }, {
    key: 'handleClickOutsideOption',
    value: function handleClickOutsideOption(e) {}
  }, {
    key: 'handleChange',
    value: function handleChange(e, index) {
      var opt = this.props.options[index];
      this.setState({ value: opt.value, empty: false, focus: false, label: opt.label });
      if (this.props.onChange) {
        this.props.onChange(opt.value);
      }
      this.setState({ activeOptionIndex: null });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2,
          _this4 = this;

      var baseCls = 'q-mui-select';

      var _props = this.props,
          optionsMaxHeight = _props.optionsMaxHeight,
          rightIcon = _props.rightIcon,
          props = _objectWithoutProperties(_props, ['optionsMaxHeight', 'rightIcon']);

      var cls = (0, _classnames2.default)([baseCls, props.className, (_ref2 = {}, _defineProperty(_ref2, baseCls + '_focus', this.state.focus && !props.disabled), _defineProperty(_ref2, baseCls + '_empty', props.value === undefined), _defineProperty(_ref2, baseCls + '_error', props.hasError), _defineProperty(_ref2, baseCls + '_disabled', props.disabled), _defineProperty(_ref2, baseCls + '_has-right-icon', Boolean(props.rightIcon)), _ref2)]);
      props = _extends({}, props, { value: props.value || '' });
      delete props['options'];
      if (rightIcon) {
        rightIcon = React.createElement(
          'div',
          { className: baseCls + '__right-icon' },
          rightIcon
        );
      }
      return React.createElement(
        'div',
        { className: cls },
        React.createElement(
          'label',
          { className: baseCls + '__label' },
          this.props.label
        ),
        React.createElement(
          'div',
          { className: baseCls + '__wrapper-el' },
          React.createElement('input', _extends({}, props, {
            autoComplete: 'off',
            onFocus: this.handleFocus.bind(this),
            onBlur: this.handleBlur.bind(this),
            onKeyDown: this.handleKeyDown.bind(this),
            className: baseCls + '__hidden-el' })),
          React.createElement(
            'div',
            { className: baseCls + '__el' },
            this.state.label
          ),
          rightIcon,
          React.createElement(
            'div',
            {
              style: { maxHeight: optionsMaxHeight },
              className: baseCls + '__options' },
            this.props.options.map(function (o, i) {
              return React.createElement(_Option2.default, _extends({
                key: i
              }, o, {
                onMouseDown: _this4.handleOptionMouseDown.bind(_this4),
                active: _this4.state.activeOptionIndex == i,
                onClickOutside: _this4.handleClickOutsideOption.bind(_this4),
                onMouseUp: _this4.handleOptionMouseUp.bind(_this4, i) }));
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.props.value;
    }
  }]);

  return Select;
}(React.Component), _class.defaultProps = {
  options: [],
  optionsMaxHeight: null,
  rightIcon: null
}, _temp2);
exports.default = Select;
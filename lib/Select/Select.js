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
          props = _objectWithoutProperties(_props, ['optionsMaxHeight']);

      var cls = (0, _classnames2.default)([baseCls, props.className, (_ref2 = {}, _defineProperty(_ref2, baseCls + '_focus', this.state.focus && !props.disabled), _defineProperty(_ref2, baseCls + '_empty', props.value === undefined), _defineProperty(_ref2, baseCls + '_error', props.hasError), _defineProperty(_ref2, baseCls + '_disabled', props.disabled), _ref2)]);
      props = _extends({}, props, { value: props.value || '' });
      delete props['options'];
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
  optionsMaxHeight: null
}, _temp2);
exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3QvU2VsZWN0LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlNlbGVjdCIsInN0YXRlIiwibGFiZWwiLCJmb2N1cyIsImFjdGl2ZU9wdGlvbkluZGV4IiwicHJvcHMiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIm9wdCIsIm9wdGlvbnMiLCJmaW5kIiwibyIsInNldFN0YXRlIiwiZW1wdHkiLCJCb29sZWFuIiwibmV4dFByb3BzIiwiZSIsIm9uRm9jdXMiLCJfb3B0aW9uRG93biIsIm9uQmx1ciIsImkiLCJoYW5kbGVDaGFuZ2UiLCJrZXlDb2RlIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJpbmRleCIsIm9uQ2hhbmdlIiwiYmFzZUNscyIsIm9wdGlvbnNNYXhIZWlnaHQiLCJjbHMiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhhc0Vycm9yIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwiaGFuZGxlS2V5RG93biIsIm1heEhlaWdodCIsIm1hcCIsImhhbmRsZU9wdGlvbk1vdXNlRG93biIsImhhbmRsZUNsaWNrT3V0c2lkZU9wdGlvbiIsImhhbmRsZU9wdGlvbk1vdXNlVXAiLCJiaW5kIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsUzs7QUFDWjs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUMsTTs7Ozs7Ozs7Ozs7Ozs7c0xBS0pDLEssR0FBUTtBQUNOQyxhQUFPLElBREQ7QUFFTkMsYUFBTyxLQUZEO0FBR05DLHlCQUFtQjtBQUhiLEs7Ozs7O3lDQUthO0FBQUE7O0FBQ25CLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxLQUFYLEtBQXFCQyxTQUF6QixFQUFvQztBQUNsQyxZQUFJQyxNQUFNLEtBQUtILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0I7QUFBQSxpQkFBS0MsRUFBRUwsS0FB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QUFBQTtBQUNJLHFCQUFPLEVBQUNrQyxXQUFXUixnQkFBWixFQURYO0FBRUkseUJBQWNELE9BQWQsY0FGSjtBQUdHLGlCQUFLdEIsS0FBTCxDQUFXSSxPQUFYLENBQW1CNEIsR0FBbkIsQ0FBdUIsVUFBQzFCLENBQUQsRUFBSVMsQ0FBSjtBQUFBLHFCQUN4QjtBQUNJLHFCQUFLQTtBQURULGlCQUVRVCxDQUZSO0FBR0ksNkJBQWUsT0FBSzJCLHFCQUFwQixhQUhKO0FBSUksd0JBQVEsT0FBS3JDLEtBQUwsQ0FBV0csaUJBQVgsSUFBZ0NnQixDQUo1QztBQUtJLGdDQUFrQixPQUFLbUIsd0JBQXZCLGFBTEo7QUFNSSwyQkFBVyxPQUFLQyxtQkFBTCxDQUF5QkMsSUFBekIsU0FBb0NyQixDQUFwQyxDQU5mLElBRHdCO0FBQUEsYUFBdkI7QUFISDtBQVhGO0FBRkYsT0FERjtBQThCRDs7O3dCQTdHVztBQUNWLGFBQU8sS0FBS2YsS0FBTCxDQUFXQyxLQUFsQjtBQUNEOzs7O0VBOUNrQlIsTUFBTTRDLFMsVUFDbEJDLFksR0FBZTtBQUNwQmxDLFdBQVMsRUFEVztBQUVwQm1CLG9CQUFrQjtBQUZFLEM7a0JBMkpUNUIsTSIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IE9wdGlvbiBmcm9tICcuL09wdGlvbic7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgb3B0aW9uc01heEhlaWdodDogbnVsbCxcbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBsYWJlbDogbnVsbCxcbiAgICBmb2N1czogZmFsc2UsXG4gICAgYWN0aXZlT3B0aW9uSW5kZXg6IG51bGxcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG9wdCA9IHRoaXMucHJvcHMub3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICBpZiAob3B0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbDogb3B0LmxhYmVsLCBlbXB0eTogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgICBsZXQgb3B0ID0gdGhpcy5wcm9wcy5vcHRpb25zLmZpbmQoXG4gICAgICAgIG8gPT4gby52YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSAmJiBvLnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgICBpZiAob3B0KSB7XG4gICAgICAgIGxhYmVsID0gb3B0LmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSAnJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbCwgZW1wdHk6ICFCb29sZWFuKGxhYmVsKSB9KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBsZXQgbGFiZWwgPSBudWxsO1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IG9wdCA9IG5leHRQcm9wcy5vcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSBuZXh0UHJvcHMudmFsdWUgJiYgby52YWx1ZSAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIGlmIChvcHQpIHtcbiAgICAgICAgbGFiZWwgPSBvcHQubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWwsIGVtcHR5OiAhQm9vbGVhbihsYWJlbCkgfSk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlO1xuICB9XG4gIGhhbmRsZUZvY3VzKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1czogdHJ1ZX0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCbHVyKGUpIHtcbiAgICBpZiAoIXRoaXMuX29wdGlvbkRvd24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiBmYWxzZSwgYWN0aXZlT3B0aW9uSW5kZXg6IHVuZGVmaW5lZH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoYW5kbGVPcHRpb25Nb3VzZURvd24oZSkge1xuICAgIHRoaXMuX29wdGlvbkRvd24gPSB0cnVlO1xuICB9XG4gIGhhbmRsZU9wdGlvbk1vdXNlVXAoaSwgZSkge1xuICAgIHRoaXMuX29wdGlvbkRvd24gPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1czogZmFsc2V9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZShlLCBpKTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZU9wdGlvbkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU9wdGlvbkluZGV4OiAwfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlT3B0aW9uSW5kZXggPCB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU9wdGlvbkluZGV4OiB0aGlzLnN0YXRlLmFjdGl2ZU9wdGlvbkluZGV4ICsgMX0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVPcHRpb25JbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVPcHRpb25JbmRleDogdGhpcy5zdGF0ZS5hY3RpdmVPcHRpb25JbmRleCAtIDF9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGUsIHRoaXMuc3RhdGUuYWN0aXZlT3B0aW9uSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlICE9PSAxMyAmJiBlLmtleUNvZGUgIT09IDkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlT3B0aW9uKGUpIHtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZSwgaW5kZXgpIHtcbiAgICBsZXQgb3B0ID0gdGhpcy5wcm9wcy5vcHRpb25zW2luZGV4XTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogb3B0LnZhbHVlLCBlbXB0eTogZmFsc2UsIGZvY3VzOiBmYWxzZSwgbGFiZWw6IG9wdC5sYWJlbH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG9wdC52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU9wdGlvbkluZGV4OiBudWxsfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmFzZUNscyA9ICdxLW11aS1zZWxlY3QnO1xuICAgIGxldCB7IG9wdGlvbnNNYXhIZWlnaHQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjbHMgPSBjbGFzc25hbWVzKFtcbiAgICAgIGJhc2VDbHMsXG4gICAgICBwcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgW2Ake2Jhc2VDbHN9X2ZvY3VzYF06IHRoaXMuc3RhdGUuZm9jdXMgJiYgIXByb3BzLmRpc2FibGVkLFxuICAgICAgICBbYCR7YmFzZUNsc31fZW1wdHlgXTogcHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2Ake2Jhc2VDbHN9X2Vycm9yYF06IHByb3BzLmhhc0Vycm9yLFxuICAgICAgICBbYCR7YmFzZUNsc31fZGlzYWJsZWRgXTogcHJvcHMuZGlzYWJsZWQsXG4gICAgICB9XG4gICAgXSk7XG4gICAgcHJvcHMgPSB7Li4ucHJvcHMsIHZhbHVlOiBwcm9wcy52YWx1ZSB8fCAnJ307XG4gICAgZGVsZXRlIHByb3BzWydvcHRpb25zJ107XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xzfV9fbGFiZWxgfT57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsc31fX3dyYXBwZXItZWxgfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J29mZidcbiAgICAgICAgICAgICAgb25Gb2N1cz17Ojp0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgICBvbkJsdXI9ezo6dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICBvbktleURvd249ezo6dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbHN9X19oaWRkZW4tZWxgfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbHN9X19lbGB9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubGFiZWx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e21heEhlaWdodDogb3B0aW9uc01heEhlaWdodH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsc31fX29wdGlvbnNgfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnMubWFwKChvLCBpKSA9PiAoXG4gICAgICAgICAgICA8T3B0aW9uIFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICB7Li4ub31cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17Ojp0aGlzLmhhbmRsZU9wdGlvbk1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlT3B0aW9uSW5kZXggPT0gaX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17Ojp0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZU9wdGlvbn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMuaGFuZGxlT3B0aW9uTW91c2VVcC5iaW5kKHRoaXMsIGkpfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iXX0=
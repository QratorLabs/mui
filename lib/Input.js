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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_temp2 = _class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false,
      empty: true
    }, _this.baseCls = 'q-mui-input', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
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
    key: 'handleChange',
    value: function handleChange(e) {
      var val = e.target.value;
      this.setState({ empty: val == '' });
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref2;

      var props = _extends({}, this.props);

      var empty = props.value === '' || props.value === undefined;
      var classes = (0, _classnames2.default)([this.baseCls, props.className, (_ref2 = {}, _defineProperty(_ref2, this.baseCls + '_focus', this.state.focus && !this.props.disabled), _defineProperty(_ref2, this.baseCls + '_empty', empty), _defineProperty(_ref2, this.baseCls + '_error', props.hasError), _defineProperty(_ref2, this.baseCls + '_disabled', props.disabled), _defineProperty(_ref2, this.baseCls + '_has-right-icon', props.rightIcon), _ref2)]);
      var label = props.label;
      delete props['label'];
      delete props['rightIcon'];
      delete props['hasError'];
      props.className = this.baseCls + '__el';
      return React.createElement(
        'div',
        { className: classes },
        React.createElement(
          'label',
          { className: this.baseCls + '__label' },
          this.props.label
        ),
        React.createElement(
          'div',
          { className: this.baseCls + '__wrapper-el' },
          React.createElement('input', _extends({}, props, {
            onChange: this.handleChange.bind(this),
            onBlur: this.handleBlur.bind(this),
            onFocus: this.handleFocus.bind(this) })),
          React.createElement(
            'div',
            { className: this.baseCls + '__right-icon' },
            this.props.rightIcon
          )
        )
      );
    }
  }]);

  return Input;
}(React.Component), _class.defaultProps = {
  type: 'text',
  className: '',
  disabled: false,
  rightIcon: null
}, _temp2);
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsInN0YXRlIiwiZm9jdXMiLCJlbXB0eSIsImJhc2VDbHMiLCJlIiwic2V0U3RhdGUiLCJwcm9wcyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidW5kZWZpbmVkIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaGFzRXJyb3IiLCJyaWdodEljb24iLCJsYWJlbCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLEs7Ozs7Ozs7Ozs7Ozs7O29MQU9KQyxLLEdBQVE7QUFDTkMsYUFBTyxLQUREO0FBRU5DLGFBQU87QUFGRCxLLFFBSVJDLE8sR0FBVSxhOzs7OztnQ0FDRUMsQyxFQUFHO0FBQ2IsV0FBS0MsUUFBTCxDQUFjLEVBQUNKLE9BQU8sSUFBUixFQUFkO0FBQ0EsVUFBSSxLQUFLSyxLQUFMLENBQVdDLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0QsS0FBTCxDQUFXQyxPQUFYLENBQW1CSCxDQUFuQjtBQUNEO0FBQ0Y7OzsrQkFDVUEsQyxFQUFHO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUNKLE9BQU8sS0FBUixFQUFkO0FBQ0EsVUFBSSxLQUFLSyxLQUFMLENBQVdFLE1BQWYsRUFBdUI7QUFDckIsYUFBS0YsS0FBTCxDQUFXRSxNQUFYLENBQWtCSixDQUFsQjtBQUNEO0FBQ0Y7OztpQ0FDWUEsQyxFQUFHO0FBQ2QsVUFBSUssTUFBTUwsRUFBRU0sTUFBRixDQUFTQyxLQUFuQjtBQUNBLFdBQUtOLFFBQUwsQ0FBYyxFQUFDSCxPQUFPTyxPQUFPLEVBQWYsRUFBZDtBQUNBLFVBQUksS0FBS0gsS0FBTCxDQUFXTSxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUtOLEtBQUwsQ0FBV00sUUFBWCxDQUFvQlIsQ0FBcEI7QUFDRDtBQUNGOzs7NkJBQ1E7QUFBQTs7QUFDUCxVQUFJRSxxQkFBWSxLQUFLQSxLQUFqQixDQUFKOztBQUVBLFVBQUlKLFFBQVFJLE1BQU1LLEtBQU4sS0FBZ0IsRUFBaEIsSUFBc0JMLE1BQU1LLEtBQU4sS0FBZ0JFLFNBQWxEO0FBQ0EsVUFBSUMsVUFBVSwwQkFBVyxDQUN2QixLQUFLWCxPQURrQixFQUV2QkcsTUFBTVMsU0FGaUIsc0NBR2pCLEtBQUtaLE9BSFksYUFHTSxLQUFLSCxLQUFMLENBQVdDLEtBQVgsSUFBb0IsQ0FBQyxLQUFLSyxLQUFMLENBQVdVLFFBSHRDLDBCQUlqQixLQUFLYixPQUpZLGFBSU1ELEtBSk4sMEJBS2pCLEtBQUtDLE9BTFksYUFLTUcsTUFBTVcsUUFMWiwwQkFNakIsS0FBS2QsT0FOWSxnQkFNU0csTUFBTVUsUUFOZiwwQkFPakIsS0FBS2IsT0FQWSxzQkFPZUcsTUFBTVksU0FQckIsVUFBWCxDQUFkO0FBVUEsVUFBSUMsUUFBUWIsTUFBTWEsS0FBbEI7QUFDQSxhQUFPYixNQUFNLE9BQU4sQ0FBUDtBQUNBLGFBQU9BLE1BQU0sV0FBTixDQUFQO0FBQ0EsYUFBT0EsTUFBTSxVQUFOLENBQVA7QUFDQUEsWUFBTVMsU0FBTixHQUFxQixLQUFLWixPQUExQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV1csT0FBaEI7QUFDRTtBQUFBO0FBQUEsWUFBTyxXQUFjLEtBQUtYLE9BQW5CLFlBQVA7QUFBNkMsZUFBS0csS0FBTCxDQUFXYTtBQUF4RCxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBYyxLQUFLaEIsT0FBbkIsaUJBQUw7QUFDRSxvREFBV0csS0FBWDtBQUNJLHNCQUFZLEtBQUtjLFlBQWpCLE1BQVksSUFBWixDQURKO0FBRUksb0JBQVUsS0FBS0MsVUFBZixNQUFVLElBQVYsQ0FGSjtBQUdJLHFCQUFXLEtBQUtDLFdBQWhCLE1BQVcsSUFBWCxDQUhKLElBREY7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFjLEtBQUtuQixPQUFuQixpQkFBTDtBQUFnRCxpQkFBS0csS0FBTCxDQUFXWTtBQUEzRDtBQUxGO0FBRkYsT0FERjtBQVlEOzs7O0VBOURpQnBCLE1BQU15QixTLFVBQ2pCQyxZLEdBQWU7QUFDcEJDLFFBQU0sTUFEYztBQUVwQlYsYUFBVyxFQUZTO0FBR3BCQyxZQUFVLEtBSFU7QUFJcEJFLGFBQVc7QUFKUyxDO2tCQWdFVG5CLEsiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICByaWdodEljb246IG51bGxcbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBmb2N1czogZmFsc2UsXG4gICAgZW1wdHk6IHRydWUsXG4gIH1cbiAgYmFzZUNscyA9ICdxLW11aS1pbnB1dCdcbiAgaGFuZGxlRm9jdXMoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiB0cnVlfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVCbHVyKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1czogZmFsc2V9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtlbXB0eTogdmFsID09ICcnfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJvcHMgPSB7Li4udGhpcy5wcm9wc307XG5cbiAgICBsZXQgZW1wdHkgPSBwcm9wcy52YWx1ZSA9PT0gJycgfHwgcHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzbmFtZXMoW1xuICAgICAgdGhpcy5iYXNlQ2xzLFxuICAgICAgcHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgIFtgJHt0aGlzLmJhc2VDbHN9X2ZvY3VzYF06IHRoaXMuc3RhdGUuZm9jdXMgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIFtgJHt0aGlzLmJhc2VDbHN9X2VtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7dGhpcy5iYXNlQ2xzfV9lcnJvcmBdOiBwcm9wcy5oYXNFcnJvcixcbiAgICAgICAgW2Ake3RoaXMuYmFzZUNsc31fZGlzYWJsZWRgXTogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIFtgJHt0aGlzLmJhc2VDbHN9X2hhcy1yaWdodC1pY29uYF06IHByb3BzLnJpZ2h0SWNvbixcbiAgICAgIH1cbiAgICBdKTtcbiAgICBsZXQgbGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICBkZWxldGUgcHJvcHNbJ2xhYmVsJ107XG4gICAgZGVsZXRlIHByb3BzWydyaWdodEljb24nXTtcbiAgICBkZWxldGUgcHJvcHNbJ2hhc0Vycm9yJ107XG4gICAgcHJvcHMuY2xhc3NOYW1lID0gYCR7dGhpcy5iYXNlQ2xzfV9fZWxgO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3RoaXMuYmFzZUNsc31fX2xhYmVsYH0+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuYmFzZUNsc31fX3dyYXBwZXItZWxgfT5cbiAgICAgICAgICA8aW5wdXQgey4uLnByb3BzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17Ojp0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25CbHVyPXs6OnRoaXMuaGFuZGxlQmx1cn0gXG4gICAgICAgICAgICAgIG9uRm9jdXM9ezo6dGhpcy5oYW5kbGVGb2N1c30vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aGlzLmJhc2VDbHN9X19yaWdodC1pY29uYH0+e3RoaXMucHJvcHMucmlnaHRJY29ufTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=
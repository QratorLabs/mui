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

var Textarea = (_temp2 = _class = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call.apply(_ref, [this].concat(args))), _this), _this.baseCls = 'q-mui-textarea', _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Textarea, [{
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
      this.setState({ focus: false });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
      this.setState({ focus: true });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var val = e.target.value;
      // this.setState({empty: val == ''});
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
      var classes = (0, _classnames2.default)([this.baseCls, this.props.className, (_ref2 = {}, _defineProperty(_ref2, this.baseCls + '_focus', this.state.focus && !props.disabled), _defineProperty(_ref2, this.baseCls + '_empty', empty), _defineProperty(_ref2, this.baseCls + '_error', props.hasError), _defineProperty(_ref2, this.baseCls + '_disabled', props.disabled), _ref2)]);
      var label = props.label;
      delete props['label'];
      delete props['hasError'];
      props.className = this.baseCls + '__el';
      return React.createElement(
        'div',
        { className: classes },
        React.createElement(
          'label',
          { className: this.baseCls + '__label' },
          label
        ),
        React.createElement(
          'div',
          { className: this.baseCls + '__wrapper-el' },
          React.createElement('textarea', _extends({}, props, {
            onFocus: this.handleFocus.bind(this),
            onBlur: this.handleBlur.bind(this),
            onChange: this.handleChange.bind(this) }))
        )
      );
    }
  }]);

  return Textarea;
}(React.Component), _class.defaultProps = {
  value: '',
  rows: 3,
  modifiers: '',
  disabled: false
}, _temp2);
exports.default = Textarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0YXJlYS5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0YXJlYSIsImJhc2VDbHMiLCJzdGF0ZSIsImZvY3VzIiwiZSIsInByb3BzIiwib25CbHVyIiwic2V0U3RhdGUiLCJvbkZvY3VzIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZSIsImVtcHR5IiwidW5kZWZpbmVkIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaGFzRXJyb3IiLCJsYWJlbCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInJvd3MiLCJtb2RpZmllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLFE7Ozs7Ozs7Ozs7Ozs7OzBMQVFKQyxPLEdBQVUsZ0IsUUFDVkMsSyxHQUFRO0FBQ05DLGFBQU87QUFERCxLOzs7OzsrQkFHR0MsQyxFQUFHO0FBQ1osVUFBSSxLQUFLQyxLQUFMLENBQVdDLE1BQWYsRUFBdUI7QUFDckIsYUFBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCRixDQUFsQjtBQUNEO0FBQ0QsV0FBS0csUUFBTCxDQUFjLEVBQUNKLE9BQU8sS0FBUixFQUFkO0FBQ0Q7OztnQ0FDV0MsQyxFQUFHO0FBQ2IsVUFBSSxLQUFLQyxLQUFMLENBQVdHLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0gsS0FBTCxDQUFXRyxPQUFYLENBQW1CSixDQUFuQjtBQUNEO0FBQ0QsV0FBS0csUUFBTCxDQUFjLEVBQUNKLE9BQU8sSUFBUixFQUFkO0FBQ0Q7OztpQ0FDWUMsQyxFQUFHO0FBQ2QsVUFBSUssTUFBTUwsRUFBRU0sTUFBRixDQUFTQyxLQUFuQjtBQUNBO0FBQ0EsVUFBSSxLQUFLTixLQUFMLENBQVdPLFFBQWYsRUFBeUI7QUFDdkIsYUFBS1AsS0FBTCxDQUFXTyxRQUFYLENBQW9CUixDQUFwQjtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUFBOztBQUNQLFVBQUlDLHFCQUFZLEtBQUtBLEtBQWpCLENBQUo7QUFDQSxVQUFJUSxRQUFRUixNQUFNTSxLQUFOLEtBQWdCLEVBQWhCLElBQXNCTixNQUFNTSxLQUFOLEtBQWdCRyxTQUFsRDtBQUNBLFVBQUlDLFVBQVUsMEJBQVcsQ0FDdkIsS0FBS2QsT0FEa0IsRUFFdkIsS0FBS0ksS0FBTCxDQUFXVyxTQUZZLHNDQUdqQixLQUFLZixPQUhZLGFBR00sS0FBS0MsS0FBTCxDQUFXQyxLQUFYLElBQW9CLENBQUNFLE1BQU1ZLFFBSGpDLDBCQUlqQixLQUFLaEIsT0FKWSxhQUlNWSxLQUpOLDBCQUtqQixLQUFLWixPQUxZLGFBS01JLE1BQU1hLFFBTFosMEJBTWpCLEtBQUtqQixPQU5ZLGdCQU1TSSxNQUFNWSxRQU5mLFVBQVgsQ0FBZDtBQVNBLFVBQUlFLFFBQVFkLE1BQU1jLEtBQWxCO0FBQ0EsYUFBT2QsTUFBTSxPQUFOLENBQVA7QUFDQSxhQUFPQSxNQUFNLFVBQU4sQ0FBUDtBQUNBQSxZQUFNVyxTQUFOLEdBQXFCLEtBQUtmLE9BQTFCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXYyxPQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFPLFdBQWMsS0FBS2QsT0FBbkIsWUFBUDtBQUE2Q2tCO0FBQTdDLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFjLEtBQUtsQixPQUFuQixpQkFBTDtBQUNFLHVEQUNRSSxLQURSO0FBRUkscUJBQVcsS0FBS2UsV0FBaEIsTUFBVyxJQUFYLENBRko7QUFHSSxvQkFBVSxLQUFLQyxVQUFmLE1BQVUsSUFBVixDQUhKO0FBSUksc0JBQVksS0FBS0MsWUFBakIsTUFBWSxJQUFaLENBSko7QUFERjtBQUZGLE9BREY7QUFZRDs7OztFQTNEb0J2QixNQUFNd0IsUyxVQUNwQkMsWSxHQUFlO0FBQ3BCYixTQUFPLEVBRGE7QUFFcEJjLFFBQU0sQ0FGYztBQUdwQkMsYUFBVyxFQUhTO0FBSXBCVCxZQUFVO0FBSlUsQztrQkE2RFRqQixRIiwiZmlsZSI6IlRleHRhcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgcm93czogMyxcbiAgICBtb2RpZmllcnM6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfVxuICBcbiAgYmFzZUNscyA9ICdxLW11aS10ZXh0YXJlYSc7XG4gIHN0YXRlID0ge1xuICAgIGZvY3VzOiBmYWxzZSxcbiAgfVxuICBoYW5kbGVCbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1czogZmFsc2V9KTtcbiAgfVxuICBoYW5kbGVGb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1czogdHJ1ZX0pO1xuICB9XG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2VtcHR5OiB2YWwgPT0gJyd9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcm9wcyA9IHsuLi50aGlzLnByb3BzfTtcbiAgICBsZXQgZW1wdHkgPSBwcm9wcy52YWx1ZSA9PT0gJycgfHwgcHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzbmFtZXMoW1xuICAgICAgdGhpcy5iYXNlQ2xzLFxuICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgW2Ake3RoaXMuYmFzZUNsc31fZm9jdXNgXTogdGhpcy5zdGF0ZS5mb2N1cyAmJiAhcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIFtgJHt0aGlzLmJhc2VDbHN9X2VtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7dGhpcy5iYXNlQ2xzfV9lcnJvcmBdOiBwcm9wcy5oYXNFcnJvcixcbiAgICAgICAgW2Ake3RoaXMuYmFzZUNsc31fZGlzYWJsZWRgXTogcHJvcHMuZGlzYWJsZWQsXG4gICAgICB9XG4gICAgXSk7XG4gICAgbGV0IGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgZGVsZXRlIHByb3BzWydsYWJlbCddO1xuICAgIGRlbGV0ZSBwcm9wc1snaGFzRXJyb3InXTtcbiAgICBwcm9wcy5jbGFzc05hbWUgPSBgJHt0aGlzLmJhc2VDbHN9X19lbGA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7dGhpcy5iYXNlQ2xzfV9fbGFiZWxgfT57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuYmFzZUNsc31fX3dyYXBwZXItZWxgfT5cbiAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgb25Gb2N1cz17Ojp0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgICBvbkJsdXI9ezo6dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17Ojp0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DaGVja2JveC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJDaGVja2JveCIsInN0YXRlIiwiZm9jdXMiLCJiYXNlQ2xzIiwiZSIsInByb3BzIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJpY29uIiwiY2hlY2tlZCIsInZhbHVlIiwiY2hlY2tlZEljb24iLCJ1bmNoZWNrZWRJY29uIiwiY29udGVudCIsImNscyIsImRpc2FibGVkIiwiY2hpbGRyZW4iLCJnZXRJY29uIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUtKQyxLLEdBQVE7QUFDTkMsYUFBTztBQURELEssUUFHUkMsTyxHQUFVLGdCOzs7OztpQ0FDR0MsQyxFQUFHO0FBQ2QsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixDQUFwQjtBQUNEO0FBQ0Y7OztnQ0FDV0EsQyxFQUFHO0FBQ2IsV0FBS0csUUFBTCxDQUFjLEVBQUNMLE9BQU8sSUFBUixFQUFkO0FBQ0EsVUFBSSxLQUFLRyxLQUFMLENBQVdHLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0gsS0FBTCxDQUFXRyxPQUFYLENBQW1CSixDQUFuQjtBQUNEO0FBQ0Y7OzsrQkFDVUEsQyxFQUFHO0FBQ1osV0FBS0csUUFBTCxDQUFjLEVBQUNMLE9BQU8sS0FBUixFQUFkO0FBQ0EsVUFBSSxLQUFLRyxLQUFMLENBQVdJLE1BQWYsRUFBdUI7QUFDckIsYUFBS0osS0FBTCxDQUFXSSxNQUFYLENBQWtCTCxDQUFsQjtBQUNEO0FBQ0Y7Ozs4QkFDUztBQUNSLFVBQUlNLGFBQUo7QUFBQSxVQUFVQyxVQUFVLEtBQUtOLEtBQUwsQ0FBV08sS0FBL0I7QUFDQSxVQUFJRCxPQUFKLEVBQWE7QUFDWEQsZUFBTyxLQUFLTCxLQUFMLENBQVdRLFdBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xILGVBQU8sS0FBS0wsS0FBTCxDQUFXUyxhQUFYLElBQTRCLEtBQUtULEtBQUwsQ0FBV1EsV0FBOUM7QUFDRDtBQUNELFVBQUlFLFVBQVUsSUFBZDtBQUNBLFVBQUlaLFVBQWEsS0FBS0EsT0FBbEIsVUFBSjtBQUNBLFVBQUlPLElBQUosRUFBVTtBQUNSLFlBQUlNLE1BQU0sMEJBQVcsQ0FBQ2IsT0FBRCxFQUFhQSxPQUFiLFVBQXdCUSxVQUFVLE9BQVYsR0FBbUIsU0FBM0MsRUFBWCxDQUFWO0FBQ0FJLGtCQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVdDLEdBQWhCLEVBQXFCLEtBQUtMLE9BQTFCO0FBQ0dEO0FBREgsU0FERjtBQUtEO0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFDSSwwQkFBZ0JQLE9BRHBCO0FBRUksa0NBQXdCLEdBRjVCO0FBR0ksa0NBQXdCLEdBSDVCO0FBSUdZO0FBSkgsT0FERjtBQVFEOzs7NkJBQ1E7QUFBQTs7QUFDUCxVQUFJQyxNQUFNLDBCQUFXLENBQUMsS0FBS2IsT0FBTixzQ0FDZixLQUFLQSxPQURVLGFBQ1EsS0FBS0YsS0FBTCxDQUFXQyxLQURuQiwwQkFFZixLQUFLQyxPQUZVLGVBRVUsS0FBS0UsS0FBTCxDQUFXTyxLQUZyQiwwQkFHZixLQUFLVCxPQUhVLGdCQUdXLEtBQUtFLEtBQUwsQ0FBV1ksUUFIdEIsMEJBSWYsS0FBS2QsT0FKVSxpQkFJWSxLQUFLRSxLQUFMLENBQVdRLFdBQVgsSUFBMEIsS0FBS1IsS0FBTCxDQUFXUyxhQUpqRCxVQUFYLENBQVY7QUFNQSxVQUFJVCxxQkFBYSxLQUFLQSxLQUFsQixDQUFKO0FBQUEsVUFDSWEsV0FBV2IsTUFBTWEsUUFEckI7O0FBR0FiLFlBQU1NLE9BQU4sR0FBZ0JOLE1BQU1PLEtBQU4sR0FBYyxJQUFkLEdBQXFCLEtBQXJDOztBQUVBLGFBQU9QLE1BQU0sT0FBTixDQUFQO0FBQ0EsYUFBT0EsTUFBTSxVQUFOLENBQVA7QUFDQSxhQUFPQSxNQUFNLGFBQU4sQ0FBUDtBQUNBLGFBQU9BLE1BQU0sZUFBTixDQUFQO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXVyxHQUFoQjtBQUNHLGFBQUtHLE9BQUwsRUFESDtBQUVHRCxnQkFGSDtBQUdFO0FBQ0ksZ0JBQUs7QUFEVCxXQUVRYixLQUZSO0FBR0ksa0JBQVUsS0FBS2UsVUFBZixNQUFVLElBQVYsQ0FISjtBQUlJLG1CQUFXLEtBQUtDLFdBQWhCLE1BQVcsSUFBWCxDQUpKO0FBS0ksb0JBQVksS0FBS0MsWUFBakIsTUFBWSxJQUFaLENBTEo7QUFIRixPQURGO0FBWUQ7Ozs7RUFoRm9CdkIsTUFBTXdCLFMsVUFDcEJDLFksR0FBZTtBQUNwQlgsZUFBYSxJQURPO0FBRXBCQyxpQkFBZTtBQUZLLEM7a0JBa0ZUZCxRIiwiZmlsZSI6IkNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmlwcGxlIGZyb20gJy4vUmlwcGxlJztcbmltcG9ydCB7IENTU1RyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZEljb246IG51bGwsXG4gICAgdW5jaGVja2VkSWNvbjogbnVsbCxcbiAgfVxuICBzdGF0ZSA9IHtcbiAgICBmb2N1czogZmFsc2UsXG4gIH1cbiAgYmFzZUNscyA9ICdxLW11aS1jaGVja2JveCdcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlRm9jdXMoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiB0cnVlfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVCbHVyKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1czogZmFsc2V9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuICBnZXRJY29uKCkge1xuICAgIGxldCBpY29uLCBjaGVja2VkID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgaWNvbiA9IHRoaXMucHJvcHMuY2hlY2tlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGljb24gPSB0aGlzLnByb3BzLnVuY2hlY2tlZEljb24gfHwgdGhpcy5wcm9wcy5jaGVja2VkSWNvbjtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xuICAgIGxldCBiYXNlQ2xzID0gYCR7dGhpcy5iYXNlQ2xzfS1pY29uYDtcbiAgICBpZiAoaWNvbikge1xuICAgICAgbGV0IGNscyA9IGNsYXNzbmFtZXMoW2Jhc2VDbHMsIGAke2Jhc2VDbHN9XyR7Y2hlY2tlZCA/ICdjaGVjayc6ICd1bmNoZWNrJ31gXSk7XG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfSBrZXk9e2NoZWNrZWR9PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e2Jhc2VDbHN9XG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17ODAwfVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezUwMH0+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNscyA9IGNsYXNzbmFtZXMoW3RoaXMuYmFzZUNscywge1xuICAgICAgW2Ake3RoaXMuYmFzZUNsc31fZm9jdXNgXTogdGhpcy5zdGF0ZS5mb2N1cyxcbiAgICAgIFtgJHt0aGlzLmJhc2VDbHN9X2NoZWNrZWRgXTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgIFtgJHt0aGlzLmJhc2VDbHN9X2Rpc2FibGVkYF06IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICBbYCR7dGhpcy5iYXNlQ2xzfV93aXRoLWljb25gXTogdGhpcy5wcm9wcy5jaGVja2VkSWNvbiB8fCB0aGlzLnByb3BzLnVuY2hlY2tlZEljb24sXG4gICAgfV0pO1xuICAgIGxldCBwcm9wcyA9IHsgLi4udGhpcy5wcm9wcyB9LFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgcHJvcHMuY2hlY2tlZCA9IHByb3BzLnZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIFxuICAgIGRlbGV0ZSBwcm9wc1sndmFsdWUnXTtcbiAgICBkZWxldGUgcHJvcHNbJ2NoaWxkcmVuJ107XG4gICAgZGVsZXRlIHByb3BzWydjaGVja2VkSWNvbiddO1xuICAgIGRlbGV0ZSBwcm9wc1sndW5jaGVja2VkSWNvbiddO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAge3RoaXMuZ2V0SWNvbigpfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBvbkJsdXI9ezo6dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgb25Gb2N1cz17Ojp0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgb25DaGFuZ2U9ezo6dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0=
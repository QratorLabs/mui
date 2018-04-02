'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (_temp = _class = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)(['q-mui-icon', this.props.className, Icon.typeToClass[this.props.type]]);
      return React.createElement(
        'i',
        _extends({}, this.props, { className: classes }),
        this.props.children
      );
    }
  }]);

  return Icon;
}(React.Component), _class.defaultProps = {
  className: '',
  type: 'material',
  style: {}
}, _class.typeToClass = {
  material: 'material-icons',
  flag: 'flag-icon'
}, _temp);
exports.default = Icon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JY29uLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkljb24iLCJjbGFzc2VzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0eXBlVG9DbGFzcyIsInR5cGUiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInN0eWxlIiwibWF0ZXJpYWwiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7Ozs7Ozs7Ozs7Ozs7SUFFTUMsSTs7Ozs7Ozs7Ozs7NkJBYUs7QUFDUCxVQUFJQyxVQUFVLDBCQUFXLENBQ3ZCLFlBRHVCLEVBRXZCLEtBQUtDLEtBQUwsQ0FBV0MsU0FGWSxFQUd2QkgsS0FBS0ksV0FBTCxDQUFpQixLQUFLRixLQUFMLENBQVdHLElBQTVCLENBSHVCLENBQVgsQ0FBZDtBQUtBLGFBQ0U7QUFBQTtBQUFBLHFCQUFPLEtBQUtILEtBQVosSUFBbUIsV0FBV0QsT0FBOUI7QUFBd0MsYUFBS0MsS0FBTCxDQUFXSTtBQUFuRCxPQURGO0FBR0Q7Ozs7RUF0QmdCUCxNQUFNUSxTLFVBRWhCQyxZLEdBQWU7QUFDcEJMLGFBQVcsRUFEUztBQUVwQkUsUUFBTSxVQUZjO0FBR3BCSSxTQUFPO0FBSGEsQyxTQU1mTCxXLEdBQWM7QUFDbkJNLFlBQVUsZ0JBRFM7QUFFbkJDLFFBQU07QUFGYSxDO2tCQWlCUlgsSSIsImZpbGUiOiJJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHR5cGU6ICdtYXRlcmlhbCcsXG4gICAgc3R5bGU6IHt9XG4gIH1cblxuICBzdGF0aWMgdHlwZVRvQ2xhc3MgPSB7XG4gICAgbWF0ZXJpYWw6ICdtYXRlcmlhbC1pY29ucycsXG4gICAgZmxhZzogJ2ZsYWctaWNvbidcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzbmFtZXMoW1xuICAgICAgJ3EtbXVpLWljb24nLFxuICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsIFxuICAgICAgSWNvbi50eXBlVG9DbGFzc1t0aGlzLnByb3BzLnR5cGVdXG4gICAgXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzZXN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvaT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iXX0=
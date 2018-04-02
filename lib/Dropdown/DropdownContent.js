'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownContent = (_temp2 = _class = function (_React$Component) {
  _inherits(DropdownContent, _React$Component);

  function DropdownContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownContent.__proto__ || Object.getPrototypeOf(DropdownContent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context.dropdownContentDidMount(this);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.stopPropagation();
    }
  }, {
    key: 'open',
    value: function open() {
      this.setState({ open: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var baseCls = 'q-dropdown-content';
      var classes = (0, _classnames2.default)([baseCls, baseCls + '_' + this.props.vPos, baseCls + '_' + this.props.hPos, this.props.className]);
      var styles = {};
      if (this.props.vPos == 'bottom') {
        styles.bottom = -this.props.vPadding;
      }
      if (this.props.hPos == 'right') {
        styles.left = this.props.hPadding;
      } else {
        styles.right = this.props.hPadding;
      }
      if (this.props.hasOwnProperty('width')) {
        styles.width = this.props.width + 'px';
      }
      var content = React.createElement(
        'div',
        {
          className: classes,
          key: '1',
          onClick: this.handleClick.bind(this),
          style: styles },
        this.props.children
      );
      if (!this.state.open) {
        content = null;
      }
      // return content;
      return React.createElement(
        'div',
        null,
        React.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          {
            transitionName: baseCls,
            transitionEnterTimeout: 450,
            transitionLeaveTimeout: 450 },
          content
        )
      );
    }
  }]);

  return DropdownContent;
}(React.Component), _class.defaultProps = {
  vPos: 'bottom',
  hPos: 'right',
  vPadding: 0,
  hPadding: 0
}, _class.contextTypes = {
  dropdownContentDidMount: PropTypes.func.isRequired
}, _temp2);
exports.default = DropdownContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bkNvbnRlbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiRHJvcGRvd25Db250ZW50Iiwic3RhdGUiLCJvcGVuIiwiY29udGV4dCIsImRyb3Bkb3duQ29udGVudERpZE1vdW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInNldFN0YXRlIiwiYmFzZUNscyIsImNsYXNzZXMiLCJwcm9wcyIsInZQb3MiLCJoUG9zIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiYm90dG9tIiwidlBhZGRpbmciLCJsZWZ0IiwiaFBhZGRpbmciLCJyaWdodCIsImhhc093blByb3BlcnR5Iiwid2lkdGgiLCJjb250ZW50IiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbnRleHRUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLFM7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR01DLGU7Ozs7Ozs7Ozs7Ozs7O3dNQUVKQyxLLEdBQVE7QUFDTkMsWUFBTTtBQURBLEs7Ozs7O3dDQWNZO0FBQ2xCLFdBQUtDLE9BQUwsQ0FBYUMsdUJBQWIsQ0FBcUMsSUFBckM7QUFDRDs7O2dDQUVXQyxDLEVBQUc7QUFDYkEsUUFBRUMsZUFBRjtBQUNEOzs7MkJBRU07QUFDTCxXQUFLQyxRQUFMLENBQWMsRUFBQ0wsTUFBTSxJQUFQLEVBQWQ7QUFDRDs7OzRCQUNPO0FBQ04sV0FBS0ssUUFBTCxDQUFjLEVBQUNMLE1BQU0sS0FBUCxFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUlNLFVBQVUsb0JBQWQ7QUFDQSxVQUFJQyxVQUFVLDBCQUFXLENBQ3ZCRCxPQUR1QixFQUNYQSxPQURXLFNBQ0EsS0FBS0UsS0FBTCxDQUFXQyxJQURYLEVBQ3NCSCxPQUR0QixTQUNpQyxLQUFLRSxLQUFMLENBQVdFLElBRDVDLEVBQ29ELEtBQUtGLEtBQUwsQ0FBV0csU0FEL0QsQ0FBWCxDQUFkO0FBR0EsVUFBSUMsU0FBUyxFQUFiO0FBQ0EsVUFBSSxLQUFLSixLQUFMLENBQVdDLElBQVgsSUFBbUIsUUFBdkIsRUFBaUM7QUFDL0JHLGVBQU9DLE1BQVAsR0FBZ0IsQ0FBQyxLQUFLTCxLQUFMLENBQVdNLFFBQTVCO0FBQ0Q7QUFDRCxVQUFJLEtBQUtOLEtBQUwsQ0FBV0UsSUFBWCxJQUFtQixPQUF2QixFQUFnQztBQUM5QkUsZUFBT0csSUFBUCxHQUFjLEtBQUtQLEtBQUwsQ0FBV1EsUUFBekI7QUFDRCxPQUZELE1BRU87QUFDTEosZUFBT0ssS0FBUCxHQUFlLEtBQUtULEtBQUwsQ0FBV1EsUUFBMUI7QUFDRDtBQUNELFVBQUksS0FBS1IsS0FBTCxDQUFXVSxjQUFYLENBQTBCLE9BQTFCLENBQUosRUFBd0M7QUFDdENOLGVBQU9PLEtBQVAsR0FBa0IsS0FBS1gsS0FBTCxDQUFXVyxLQUE3QjtBQUNEO0FBQ0QsVUFBSUMsVUFDRjtBQUFBO0FBQUE7QUFDSSxxQkFBV2IsT0FEZjtBQUVJLGVBQUksR0FGUjtBQUdJLG1CQUFXLEtBQUtjLFdBQWhCLE1BQVcsSUFBWCxDQUhKO0FBSUksaUJBQU9ULE1BSlg7QUFLRyxhQUFLSixLQUFMLENBQVdjO0FBTGQsT0FERjtBQVNBLFVBQUksQ0FBQyxLQUFLdkIsS0FBTCxDQUFXQyxJQUFoQixFQUFzQjtBQUNwQm9CLGtCQUFVLElBQVY7QUFDRDtBQUNEO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDSSw0QkFBZ0JkLE9BRHBCO0FBRUksb0NBQXdCLEdBRjVCO0FBR0ksb0NBQXdCLEdBSDVCO0FBSUdjO0FBSkg7QUFERixPQURGO0FBVUQ7Ozs7RUF2RTJCeEIsTUFBTTJCLFMsVUFNM0JDLFksR0FBZTtBQUNwQmYsUUFBTSxRQURjO0FBRXBCQyxRQUFNLE9BRmM7QUFHcEJJLFlBQVUsQ0FIVTtBQUlwQkUsWUFBVTtBQUpVLEMsU0FPZlMsWSxHQUFlO0FBQ3BCdkIsMkJBQXlCTCxVQUFVNkIsSUFBVixDQUFlQztBQURwQixDO2tCQTZEVDdCLGUiLCJmaWxlIjoiRHJvcGRvd25Db250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuXG5jbGFzcyBEcm9wZG93bkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZQb3M6ICdib3R0b20nLFxuICAgIGhQb3M6ICdyaWdodCcsXG4gICAgdlBhZGRpbmc6IDAsXG4gICAgaFBhZGRpbmc6IDAsXG4gIH1cblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGRyb3Bkb3duQ29udGVudERpZE1vdW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5kcm9wZG93bkNvbnRlbnREaWRNb3VudCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmFzZUNscyA9ICdxLWRyb3Bkb3duLWNvbnRlbnQnO1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NuYW1lcyhbXG4gICAgICBiYXNlQ2xzLCBgJHtiYXNlQ2xzfV8ke3RoaXMucHJvcHMudlBvc31gLCBgJHtiYXNlQ2xzfV8ke3RoaXMucHJvcHMuaFBvc31gLCB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgIF0pO1xuICAgIGxldCBzdHlsZXMgPSB7fTtcbiAgICBpZiAodGhpcy5wcm9wcy52UG9zID09ICdib3R0b20nKSB7XG4gICAgICBzdHlsZXMuYm90dG9tID0gLXRoaXMucHJvcHMudlBhZGRpbmc7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhQb3MgPT0gJ3JpZ2h0Jykge1xuICAgICAgc3R5bGVzLmxlZnQgPSB0aGlzLnByb3BzLmhQYWRkaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMucmlnaHQgPSB0aGlzLnByb3BzLmhQYWRkaW5nO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKSkge1xuICAgICAgc3R5bGVzLndpZHRoID0gYCR7dGhpcy5wcm9wcy53aWR0aH1weGA7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gKFxuICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9IFxuICAgICAgICAgIGtleT0nMSdcbiAgICAgICAgICBvbkNsaWNrPXs6OnRoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlc30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICBpZiAoIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgY29udGVudCA9IG51bGw7XG4gICAgfVxuICAgIC8vIHJldHVybiBjb250ZW50O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17YmFzZUNsc31cbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezQ1MH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezQ1MH0+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkNvbnRlbnQ7Il19
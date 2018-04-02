'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = (_temp = _class = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = { open: false };
    _this.handleWindowClick = _this._handleWindowClick.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dropdownContentDidMount: this.handleContentMount.bind(this),
        dropdownItemClick: this.handleItemClick.bind(this),
        dropdownToggleDidMount: this.handleToggleMount.bind(this),
        dropdownToggleClick: this.handleToggleClick.bind(this)
      };
    }
  }, {
    key: 'handleContentMount',
    value: function handleContentMount(el) {
      this._content = el;
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(e, el) {
      if (this.props.onItemSelect) {
        this.props.onItemSelect(e, el);
      }
      if (this.props.closeOnSelect) {
        this.close();
      }
    }
  }, {
    key: 'handleToggleMount',
    value: function handleToggleMount(el) {
      this._toggle = el;
    }
  }, {
    key: 'handleToggleClick',
    value: function handleToggleClick(e) {
      // e.stopPropagation();
      this._clicked = true;
      this.open();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('click', this.handleWindowClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.handleWindowClick);
    }
  }, {
    key: '_handleWindowClick',
    value: function _handleWindowClick(e) {
      if (this._clicked) {
        this._clicked = false;
        return;
      }
      this.close();
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ open: false });
      this._content.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.setState({ open: true });
      this._content.open();
    }
  }, {
    key: 'render',
    value: function render() {
      var baseCls = 'q-dropdown';
      var cls = (0, _classnames2.default)([this.props.className, baseCls, _defineProperty({}, baseCls + '_open', this.state.open)]);
      return React.createElement(
        'div',
        { className: cls },
        this.props.children
      );
    }
  }]);

  return Dropdown;
}(React.Component), _class.defaultProps = {
  className: "",
  closeOnSelect: false
}, _class.childContextTypes = {
  dropdownContentDidMount: PropTypes.func.isRequired,
  dropdownItemClick: PropTypes.func,
  dropdownToggleDidMount: PropTypes.func.isRequired,
  dropdownToggleClick: PropTypes.func.isRequired
}, _temp);
exports.default = Dropdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bi5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJEcm9wZG93biIsInByb3BzIiwic3RhdGUiLCJvcGVuIiwiaGFuZGxlV2luZG93Q2xpY2siLCJfaGFuZGxlV2luZG93Q2xpY2siLCJkcm9wZG93bkNvbnRlbnREaWRNb3VudCIsImhhbmRsZUNvbnRlbnRNb3VudCIsImRyb3Bkb3duSXRlbUNsaWNrIiwiaGFuZGxlSXRlbUNsaWNrIiwiZHJvcGRvd25Ub2dnbGVEaWRNb3VudCIsImhhbmRsZVRvZ2dsZU1vdW50IiwiZHJvcGRvd25Ub2dnbGVDbGljayIsImhhbmRsZVRvZ2dsZUNsaWNrIiwiZWwiLCJfY29udGVudCIsImUiLCJvbkl0ZW1TZWxlY3QiLCJjbG9zZU9uU2VsZWN0IiwiY2xvc2UiLCJfdG9nZ2xlIiwiX2NsaWNrZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiYmFzZUNscyIsImNscyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOztJQUFZQyxTOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFFQyxNQUFNLEtBQVIsRUFBYjtBQUNBLFVBQUtDLGlCQUFMLEdBQTJCLE1BQUtDLGtCQUFoQztBQUhpQjtBQUlsQjs7OztzQ0FPaUI7QUFDaEIsYUFBTztBQUNMQyxpQ0FBMkIsS0FBS0Msa0JBQWhDLE1BQTJCLElBQTNCLENBREs7QUFFTEMsMkJBQXFCLEtBQUtDLGVBQTFCLE1BQXFCLElBQXJCLENBRks7QUFHTEMsZ0NBQTBCLEtBQUtDLGlCQUEvQixNQUEwQixJQUExQixDQUhLO0FBSUxDLDZCQUF1QixLQUFLQyxpQkFBNUIsTUFBdUIsSUFBdkI7QUFKSyxPQUFQO0FBTUQ7Ozt1Q0FTa0JDLEUsRUFBSTtBQUNyQixXQUFLQyxRQUFMLEdBQWdCRCxFQUFoQjtBQUNEOzs7b0NBQ2VFLEMsRUFBR0YsRSxFQUFJO0FBQ3JCLFVBQUksS0FBS2IsS0FBTCxDQUFXZ0IsWUFBZixFQUE2QjtBQUMzQixhQUFLaEIsS0FBTCxDQUFXZ0IsWUFBWCxDQUF3QkQsQ0FBeEIsRUFBMkJGLEVBQTNCO0FBQ0Q7QUFDRCxVQUFJLEtBQUtiLEtBQUwsQ0FBV2lCLGFBQWYsRUFBOEI7QUFDNUIsYUFBS0MsS0FBTDtBQUNEO0FBQ0Y7OztzQ0FDaUJMLEUsRUFBSTtBQUNwQixXQUFLTSxPQUFMLEdBQWVOLEVBQWY7QUFDRDs7O3NDQUNpQkUsQyxFQUFHO0FBQ25CO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUtsQixJQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEJtQixhQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxLQUFLbkIsaUJBQXRDO0FBQ0Q7OzsyQ0FDc0I7QUFDckJrQixhQUFPRSxtQkFBUCxDQUEyQixPQUEzQixFQUFvQyxLQUFLcEIsaUJBQXpDO0FBQ0Q7Ozt1Q0FDa0JZLEMsRUFBRztBQUNwQixVQUFJLEtBQUtLLFFBQVQsRUFBbUI7QUFDakIsYUFBS0EsUUFBTCxHQUFnQixLQUFoQjtBQUNBO0FBQ0Q7QUFDRCxXQUFLRixLQUFMO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUtNLFFBQUwsQ0FBYyxFQUFDdEIsTUFBTSxLQUFQLEVBQWQ7QUFDQSxXQUFLWSxRQUFMLENBQWNJLEtBQWQ7QUFDRDs7OzJCQUNNO0FBQ0wsV0FBS00sUUFBTCxDQUFjLEVBQUN0QixNQUFNLElBQVAsRUFBZDtBQUNBLFdBQUtZLFFBQUwsQ0FBY1osSUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJdUIsVUFBVSxZQUFkO0FBQ0EsVUFBSUMsTUFBTSwwQkFBVyxDQUFDLEtBQUsxQixLQUFMLENBQVcyQixTQUFaLEVBQXVCRixPQUF2QixzQkFDZkEsT0FEZSxZQUNFLEtBQUt4QixLQUFMLENBQVdDLElBRGIsRUFBWCxDQUFWO0FBR0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXd0IsR0FBaEI7QUFDRyxhQUFLMUIsS0FBTCxDQUFXNEI7QUFEZCxPQURGO0FBS0Q7Ozs7RUFsRm9CL0IsTUFBTWdDLFMsVUFRcEJDLFksR0FBZTtBQUNwQkgsYUFBVyxFQURTO0FBRXBCVixpQkFBZTtBQUZLLEMsU0FjZmMsaUIsR0FBb0I7QUFDekIxQiwyQkFBeUJQLFVBQVVrQyxJQUFWLENBQWVDLFVBRGY7QUFFekIxQixxQkFBbUJULFVBQVVrQyxJQUZKO0FBR3pCdkIsMEJBQXdCWCxVQUFVa0MsSUFBVixDQUFlQyxVQUhkO0FBSXpCdEIsdUJBQXFCYixVQUFVa0MsSUFBVixDQUFlQztBQUpYLEM7a0JBK0RkbEMsUSIsImZpbGUiOiJEcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcbiAgICB0aGlzLmhhbmRsZVdpbmRvd0NsaWNrID0gOjp0aGlzLl9oYW5kbGVXaW5kb3dDbGljaztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlXG4gIH07XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBkcm9wZG93bkNvbnRlbnREaWRNb3VudDogOjp0aGlzLmhhbmRsZUNvbnRlbnRNb3VudCxcbiAgICAgIGRyb3Bkb3duSXRlbUNsaWNrOiA6OnRoaXMuaGFuZGxlSXRlbUNsaWNrLFxuICAgICAgZHJvcGRvd25Ub2dnbGVEaWRNb3VudDogOjp0aGlzLmhhbmRsZVRvZ2dsZU1vdW50LFxuICAgICAgZHJvcGRvd25Ub2dnbGVDbGljazogOjp0aGlzLmhhbmRsZVRvZ2dsZUNsaWNrLFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBkcm9wZG93bkNvbnRlbnREaWRNb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkcm9wZG93bkl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZHJvcGRvd25Ub2dnbGVEaWRNb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkcm9wZG93blRvZ2dsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgaGFuZGxlQ29udGVudE1vdW50KGVsKSB7XG4gICAgdGhpcy5fY29udGVudCA9IGVsO1xuICB9XG4gIGhhbmRsZUl0ZW1DbGljayhlLCBlbCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uSXRlbVNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1TZWxlY3QoZSwgZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZVRvZ2dsZU1vdW50KGVsKSB7XG4gICAgdGhpcy5fdG9nZ2xlID0gZWw7XG4gIH1cbiAgaGFuZGxlVG9nZ2xlQ2xpY2soZSkge1xuICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5fY2xpY2tlZCA9IHRydWU7XG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVdpbmRvd0NsaWNrKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVdpbmRvd0NsaWNrKTtcbiAgfVxuICBfaGFuZGxlV2luZG93Q2xpY2soZSkge1xuICAgIGlmICh0aGlzLl9jbGlja2VkKSB7XG4gICAgICB0aGlzLl9jbGlja2VkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuICBcbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICB0aGlzLl9jb250ZW50LmNsb3NlKClcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLl9jb250ZW50Lm9wZW4oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmFzZUNscyA9ICdxLWRyb3Bkb3duJ1xuICAgIGxldCBjbHMgPSBjbGFzc25hbWVzKFt0aGlzLnByb3BzLmNsYXNzTmFtZSwgYmFzZUNscywge1xuICAgICAgW2Ake2Jhc2VDbHN9X29wZW5gXTogdGhpcy5zdGF0ZS5vcGVuXG4gICAgfV0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0=
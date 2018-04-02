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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownToggle = (_temp = _class = function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).apply(this, arguments));
  }

  _createClass(DropdownToggle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context.dropdownToggleDidMount(this);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      this.context.dropdownToggleClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        {
          className: 'q-dropdown-toggle',
          onClick: this.handleClick.bind(this) },
        this.props.children
      );
    }
  }]);

  return DropdownToggle;
}(React.Component), _class.contextTypes = {
  dropdownToggleDidMount: PropTypes.func.isRequired,
  dropdownToggleClick: PropTypes.func.isRequired
}, _temp);
exports.default = DropdownToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93blRvZ2dsZS5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJEcm9wZG93blRvZ2dsZSIsImNvbnRleHQiLCJkcm9wZG93blRvZ2dsZURpZE1vdW50IiwiZSIsImRyb3Bkb3duVG9nZ2xlQ2xpY2siLCJoYW5kbGVDbGljayIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOztJQUFZQyxTOzs7Ozs7Ozs7O0lBRU5DLGM7Ozs7Ozs7Ozs7O3dDQU9nQjtBQUNsQixXQUFLQyxPQUFMLENBQWFDLHNCQUFiLENBQW9DLElBQXBDO0FBQ0Q7OztnQ0FFV0MsQyxFQUFHO0FBQ2IsV0FBS0YsT0FBTCxDQUFhRyxtQkFBYixDQUFpQ0QsQ0FBakM7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDSSxxQkFBVSxtQkFEZDtBQUVJLG1CQUFXLEtBQUtFLFdBQWhCLE1BQVcsSUFBWCxDQUZKO0FBR0csYUFBS0MsS0FBTCxDQUFXQztBQUhkLE9BREY7QUFPRDs7OztFQXZCMEJULE1BQU1VLFMsVUFFMUJDLFksR0FBZTtBQUNwQlAsMEJBQXdCSCxVQUFVVyxJQUFWLENBQWVDLFVBRG5CO0FBRXBCUCx1QkFBcUJMLFVBQVVXLElBQVYsQ0FBZUM7QUFGaEIsQztrQkF3QlRYLGMiLCJmaWxlIjoiRHJvcGRvd25Ub2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIERyb3Bkb3duVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgZHJvcGRvd25Ub2dnbGVEaWRNb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkcm9wZG93blRvZ2dsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb250ZXh0LmRyb3Bkb3duVG9nZ2xlRGlkTW91bnQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgdGhpcy5jb250ZXh0LmRyb3Bkb3duVG9nZ2xlQ2xpY2soZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwicS1kcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgIG9uQ2xpY2s9ezo6dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blRvZ2dsZTtcbiJdfQ==
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
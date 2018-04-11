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
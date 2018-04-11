'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Ripple = require('../Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownItem = (_temp = _class = function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    _classCallCheck(this, DropdownItem);

    return _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
  }

  _createClass(DropdownItem, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e, this);
      }
      this.context.dropdownItemClick(e, this);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var el = ReactDOM.findDOMNode(this._el);
      this._ripple.start({
        event: event, rect: el.getBoundingClientRect()
      });
      if (event.detail > 1) {
        event.preventDefault();
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this._ripple.stop();
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this._ripple.stop();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = [React.createElement(_Ripple2.default, { ref: function ref(el) {
          return _this2._ripple = el;
        }, key: 'ripple' }), React.createElement(
        'div',
        { className: 'q-dropdown-item__content', key: 'content' },
        this.props.children
      )];
      var className = (0, _classnames2.default)([this.props.className, 'q-dropdown-item', {
        'q-dropdown-item_multiline': this.props.multiline
      }]);
      var props = _extends({}, this.props, {
        className: className,
        ref: function ref(el) {
          return _this2._el = el;
        },
        onClick: this.handleClick.bind(this),
        onMouseDown: this.handleMouseDown.bind(this),
        onMouseUp: this.handleMouseUp.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this)

      });
      delete props['multiline'];
      delete props['container'];
      if (this.props.container) {
        return React.cloneElement(this.props.container, props, children);
      }
      return React.createElement(
        'div',
        props,
        children
      );
    }
  }]);

  return DropdownItem;
}(React.Component), _class.defaultProps = {
  className: ''
}, _class.contextTypes = {
  dropdownItemClick: PropTypes.func
}, _temp);
exports.default = DropdownItem;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _reactTransitionGroup = require('react-transition-group');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleClick = _this._handleClick.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: '_handleClick',
    value: function _handleClick(e) {
      this.props.onClick(e);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      ReactDOM.findDOMNode(this._el).addEventListener('click', this.handleClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM.findDOMNode(this._el).removeEventListener('click', this.handleContainerClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var baseCls = 'q-mui-modal';
      var cls = (0, _classnames2.default)([baseCls, this.props.className]);
      return React.createElement(
        'div',
        { ref: function ref(el) {
            return _this2._el = el;
          }, className: cls },
        this.props.children
      );
    }
  }]);

  return Modal;
}(React.Component);

var ModalContainer = (_temp = _class = function (_React$Component2) {
  _inherits(ModalContainer, _React$Component2);

  function ModalContainer(props) {
    _classCallCheck(this, ModalContainer);

    var _this3 = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));

    _this3.state = {
      open: false
    };

    _this3.el = document.createElement('div');
    _this3.el.className = 'q-mui-modal-container';
    _this3.handleContainerClick = _this3._handleContainerClick.bind(_this3);
    return _this3;
  }

  _createClass(ModalContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.appendChild(this.el);
      this.el.addEventListener('click', this.handleContainerClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.el.removeEventListener('click', this.handleContainerClick);
      document.body.removeChild(this.el);
      document.body.style.overflow = null;
    }
  }, {
    key: '_handleContainerClick',
    value: function _handleContainerClick(e) {
      if (this._modalClicked) {
        this._modalClicked = false;
      } else if (this.props.closeOnClickOutside) {
        this.close();
      }
    }
  }, {
    key: 'handleModalClick',
    value: function handleModalClick() {
      this._modalClicked = true;
    }
  }, {
    key: 'getModal',
    value: function getModal() {
      var _this4 = this;

      var modal = null;
      if (this.state.open) {
        modal = React.createElement(
          Modal,
          _extends({}, this.props, {
            key: 'modal',
            onClick: this.handleModalClick.bind(this),
            ref: function ref(el) {
              return _this4._modal = el;
            } }),
          this.props.children
        );
      }
      return React.createElement(
        _reactTransitionGroup.CSSTransitionGroup,
        {
          transitionName: 'q-mui-modal',
          transitionEnterTimeout: 300,
          transitionLeave: false },
        modal
      );
    }
  }, {
    key: 'constrolBodyScroll',
    value: function constrolBodyScroll() {
      if (this.state.open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = null;
      }
    }
  }, {
    key: 'open',
    value: function open() {
      var _this5 = this;

      return new Promise(function (resolve) {
        _this5.setState({ open: true }, resolve);
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ open: false });
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.constrolBodyScroll();
      var baseCls = 'q-mui-modal-container';
      this.el.className = (0, _classnames2.default)([baseCls, _defineProperty({}, baseCls + '_open', this.state.open)]);
      return ReactDOM.createPortal(this.getModal(), this.el);
    }
  }]);

  return ModalContainer;
}(React.Component), _class.defaultProps = {
  closeOnClickOutside: true
}, _temp);
exports.default = ModalContainer;
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

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var baseCls = 'q-mui-tooltip';
      var cls = (0, _classnames2.default)([baseCls, baseCls + '_' + this.props.position]);
      return React.createElement(
        'div',
        { className: cls },
        React.createElement('div', { className: baseCls + '__arrow' }),
        this.props.content
      );
    }
  }]);

  return Tooltip;
}(React.Component);

var TooltipContainer = (_temp = _class = function (_React$Component2) {
  _inherits(TooltipContainer, _React$Component2);

  function TooltipContainer(props) {
    _classCallCheck(this, TooltipContainer);

    var _this2 = _possibleConstructorReturn(this, (TooltipContainer.__proto__ || Object.getPrototypeOf(TooltipContainer)).call(this, props));

    _this2.arrowSize = 3;

    _this2.state = { show: false };
    _this2.container = document.createElement('div');
    _this2.handleMouseEnter = _this2._handleMouseEnter.bind(_this2);
    _this2.handleMouseLeave = _this2._handleMouseLeave.bind(_this2);
    return _this2;
  }

  _createClass(TooltipContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.appendChild(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.container);
    }
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter() {
      var _this3 = this;

      this._enterTimeout = setTimeout(function () {
        _this3.setState({ show: true });
      }, this.props.enterDelay);
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave() {
      clearTimeout(this._enterTimeout);
      this.setState({ show: false });
    }
  }, {
    key: 'handleChildMount',
    value: function handleChildMount(el) {
      if (el) {
        this._el = el;
        var domEl = ReactDOM.findDOMNode(el);
        domEl.addEventListener('mouseenter', this.handleMouseEnter);
        domEl.addEventListener('mouseleave', this.handleMouseLeave);
        window.addEventListener('scroll', this.handleMouseLeave);
      } else if (this._el) {
        var _domEl = ReactDOM.findDOMNode(this._el);
        _domEl.removeEventListener('mouseenter', this.handleMouseEnter);
        _domEl.removeEventListener('mouseleave', this.handleMouseLeave);
        window.removeEventListener('scroll', this.handleMouseLeave);
      }
    }
  }, {
    key: 'calcPosition',
    value: function calcPosition(tooltip) {
      if (!tooltip || !this._el) {
        return;
      }
      var target = ReactDOM.findDOMNode(this._el);
      tooltip = ReactDOM.findDOMNode(tooltip);
      var targetRect = target.getBoundingClientRect(),
          tooltipRect = tooltip.getBoundingClientRect();
      var xDiff = (targetRect.width - tooltipRect.width) / 2,
          yDiff = (targetRect.height - tooltipRect.height) / 2;;
      var point = {
        left: targetRect.left + xDiff,
        top: targetRect.top + yDiff
      };
      var offset = this.arrowSize + this.props.padding,
          xOffset = (tooltipRect.width + targetRect.width) / 2 + offset,
          yOffset = (tooltipRect.height + targetRect.height) / 2 + offset;
      switch (this.props.position) {
        case 'top':
          point.top -= yOffset;
          break;
        case 'bottom':
          point.top += yOffset;
          break;
        case 'left':
          point.left -= xOffset;
          break;
        case 'right':
          point.left += xOffset;
          break;
      }
      tooltip.style.left = point.left + 'px';
      tooltip.style.top = point.top + 'px';
    }
  }, {
    key: 'getTooltip',
    value: function getTooltip() {
      var tooltip = null;
      if (this.state.show) {
        tooltip = React.createElement(Tooltip, _extends({}, this.props, { ref: this.calcPosition.bind(this) }));
      }
      return React.createElement(
        _reactTransitionGroup.CSSTransitionGroup,
        {
          transitionName: 'q-mui-tooltip',
          transitionEnterTimeout: 300,
          transitionEnter: false,
          transitionLeave: false },
        tooltip
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var baseCls = 'q-mui-tooltip-container';
      this.container.className = (0, _classnames2.default)([baseCls, _defineProperty({}, baseCls + '_show', this.state.show)]);
      var portal = ReactDOM.createPortal(this.getTooltip(), this.container);

      var child = React.Children.only(this.props.children),
          props = _extends({}, child.props, { key: 'children' });
      props.ref = this.handleChildMount.bind(this);
      return [portal, React.cloneElement(child, props)];
    }
  }]);

  return TooltipContainer;
}(React.Component), _class.defaultProps = {
  padding: 2,
  position: 'top'
}, _temp);
exports.default = TooltipContainer;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Ripple = require('./Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp2 = _class = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'getRect',
    value: function getRect() {
      return ReactDOM.findDOMNode(this._el).getBoundingClientRect();
    }
  }, {
    key: 'isRaised',
    value: function isRaised() {
      return this.props.modifiers.split(' ').indexOf('raised') > -1;
    }
  }, {
    key: 'isIcon',
    value: function isIcon() {
      return this.props.modifiers.split(' ').indexOf('icon') > -1;
    }
  }, {
    key: 'handleDown',
    value: function handleDown(event) {
      var rect = this.getRect();
      var center = this.isIcon();
      this._ripple.start({ rect: rect, event: event, center: center, round: center });
      if (this.props.onMouseDown) {
        this.props.onMouseDown(event);
      }
    }
  }, {
    key: 'handleUp',
    value: function handleUp(event) {
      this._ripple.stop();
      if (this.props.onMouseUp) {
        this.props.onMouseUp(event);
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      var _this2 = this;

      setTimeout(function (_) {
        _this2._showFocusRipple();
        _this2._el.focus();
        _this2.setState({ focus: true });
      }, 200);
    }
  }, {
    key: '_showFocusRipple',
    value: function _showFocusRipple() {
      this._ripple.start({
        rect: this.getRect(),
        center: true,
        round: this.isIcon(),
        pulsate: this.isRaised() ? true : false
      });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      this._showFocusRipple();
      this.setState({ focus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      if (this._ripple) {
        this._ripple.stop();
      }
      this.setState({ focus: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var modifiers = [].concat(_toConsumableArray(this.props.modifiers.split(' ')), [this.state.focus ? 'focused' : false]).filter(Boolean);
      var baseCls = 'q-mui-button';
      var classes = [baseCls, this.props.className].concat(_toConsumableArray(modifiers.map(function (m) {
        return baseCls + '_' + m;
      }))).join(' ');
      var props = _extends({}, this.props);
      delete props['className'];
      delete props['modifiers'];
      props = _extends({}, props, {
        className: classes,
        onMouseDown: this.handleDown.bind(this),
        onMouseUp: this.handleUp.bind(this),
        onFocus: this.handleFocus.bind(this),
        onBlur: this.handleBlur.bind(this),
        ref: function ref(el) {
          return _this3._el = el;
        }
      });
      delete props['container'];
      var children = [React.createElement(_Ripple2.default, { ref: function ref(el) {
          return _this3._ripple = el;
        }, key: 'ripple' }), React.createElement(
        'span',
        { className: baseCls + '__container', key: 'content' },
        this.props.children
      )];
      var container = React.createElement(
        'button',
        props,
        children
      );
      if (this.props.container) {
        container = React.cloneElement(this.props.container, props, children);
      }
      return container;
    }
  }]);

  return Button;
}(React.Component), _class.defaultProps = {
  modifiers: '',
  className: ''
}, _temp2);
exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CdXR0b24uanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJCdXR0b24iLCJzdGF0ZSIsImZvY3VzIiwiZmluZERPTU5vZGUiLCJfZWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwcm9wcyIsIm1vZGlmaWVycyIsInNwbGl0IiwiaW5kZXhPZiIsImV2ZW50IiwicmVjdCIsImdldFJlY3QiLCJjZW50ZXIiLCJpc0ljb24iLCJfcmlwcGxlIiwic3RhcnQiLCJyb3VuZCIsIm9uTW91c2VEb3duIiwic3RvcCIsIm9uTW91c2VVcCIsInNldFRpbWVvdXQiLCJfc2hvd0ZvY3VzUmlwcGxlIiwic2V0U3RhdGUiLCJwdWxzYXRlIiwiaXNSYWlzZWQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiYmFzZUNscyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJtYXAiLCJtIiwiam9pbiIsImhhbmRsZURvd24iLCJoYW5kbGVVcCIsIm9uRm9jdXMiLCJoYW5kbGVGb2N1cyIsIm9uQmx1ciIsImhhbmRsZUJsdXIiLCJyZWYiLCJlbCIsImNoaWxkcmVuIiwiY29udGFpbmVyIiwiY2xvbmVFbGVtZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsUTs7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQyxNOzs7Ozs7Ozs7Ozs7OztzTEFPSkMsSyxHQUFRO0FBQ05DLGFBQU87QUFERCxLOzs7Ozs4QkFHRTtBQUNSLGFBQU9ILFNBQVNJLFdBQVQsQ0FBcUIsS0FBS0MsR0FBMUIsRUFBK0JDLHFCQUEvQixFQUFQO0FBQ0Q7OzsrQkFDVTtBQUNULGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixFQUFnQ0MsT0FBaEMsQ0FBd0MsUUFBeEMsSUFBb0QsQ0FBQyxDQUE1RDtBQUNEOzs7NkJBQ1E7QUFDUCxhQUFPLEtBQUtILEtB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LEtBQUksUUFBMUMsR0FEYSxFQUViO0FBQUE7QUFBQSxVQUFNLFdBQWNiLE9BQWQsZ0JBQU4sRUFBMEMsS0FBSSxTQUE5QztBQUNHLGFBQUt0QixLQUFMLENBQVdvQztBQURkLE9BRmEsQ0FBZjtBQU1BLFVBQUlDLFlBQ0Y7QUFBQTtBQUFZckMsYUFBWjtBQUNHb0M7QUFESCxPQURGO0FBS0EsVUFBSSxLQUFLcEMsS0FBTCxDQUFXcUMsU0FBZixFQUEwQjtBQUN4QkEsb0JBQVk3QyxNQUFNOEMsWUFBTixDQUFtQixLQUFLdEMsS0FBTCxDQUFXcUMsU0FBOUIsRUFBeUNyQyxLQUF6QyxFQUFnRG9DLFFBQWhELENBQVo7QUFDRDtBQUNELGFBQU9DLFNBQVA7QUFDRDs7OztFQTlGa0I3QyxNQUFNK0MsUyxVQUVsQkMsWSxHQUFlO0FBQ3BCdkMsYUFBVyxFQURTO0FBRXBCdUIsYUFBVztBQUZTLEM7a0JBK0ZUOUIsTSIsImZpbGUiOiJCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJpcHBsZSBmcm9tICcuL1JpcHBsZSc7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtb2RpZmllcnM6ICcnLFxuICAgIGNsYXNzTmFtZTogJydcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGZvY3VzOiBmYWxzZVxuICB9XG4gIGdldFJlY3QoKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuX2VsKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuICBpc1JhaXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RpZmllcnMuc3BsaXQoJyAnKS5pbmRleE9mKCdyYWlzZWQnKSA+IC0xO1xuICB9XG4gIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5tb2RpZmllcnMuc3BsaXQoJyAnKS5pbmRleE9mKCdpY29uJykgPiAtMTtcbiAgfVxuICBoYW5kbGVEb3duKGV2ZW50KSB7XG4gICAgbGV0IHJlY3QgPSB0aGlzLmdldFJlY3QoKTtcbiAgICBsZXQgY2VudGVyID0gdGhpcy5pc0ljb24oKTtcbiAgICB0aGlzLl9yaXBwbGUuc3RhcnQoe3JlY3QsIGV2ZW50LCBjZW50ZXIsIHJvdW5kOiBjZW50ZXJ9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZVVwKGV2ZW50KSB7XG4gICAgdGhpcy5fcmlwcGxlLnN0b3AoKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk1vdXNlVXApIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgZm9jdXMoKSB7XG4gICAgc2V0VGltZW91dChfID0+IHtcbiAgICAgIHRoaXMuX3Nob3dGb2N1c1JpcHBsZSgpO1xuICAgICAgdGhpcy5fZWwuZm9jdXMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiB0cnVlfSk7XG4gICAgfSwgMjAwKVxuICB9XG4gIF9zaG93Rm9jdXNSaXBwbGUoKSB7XG4gICAgdGhpcy5fcmlwcGxlLnN0YXJ0KHtcbiAgICAgIHJlY3Q6IHRoaXMuZ2V0UmVjdCgpLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgcm91bmQ6IHRoaXMuaXNJY29uKCksXG4gICAgICBwdWxzYXRlOiB0aGlzLmlzUmFpc2VkKCkgPyB0cnVlIDogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgIHRoaXMuX3Nob3dGb2N1c1JpcHBsZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiB0cnVlfSk7XG4gIH1cbiAgaGFuZGxlQmx1cihldmVudCkge1xuICAgIGlmICh0aGlzLl9yaXBwbGUpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5zdG9wKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzOiBmYWxzZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtb2RpZmllcnMgPSBbLi4udGhpcy5wcm9wcy5tb2RpZmllcnMuc3BsaXQoJyAnKSwgdGhpcy5zdGF0ZS5mb2N1cyA/ICdmb2N1c2VkJyA6IGZhbHNlXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgbGV0IGJhc2VDbHMgPSAncS1tdWktYnV0dG9uJztcbiAgICBsZXQgY2xhc3NlcyA9IFtcbiAgICAgIGJhc2VDbHMsIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgLi4ubW9kaWZpZXJzLm1hcChtID0+IGAke2Jhc2VDbHN9XyR7bX1gKVxuICAgIF0uam9pbignICcpO1xuICAgIGxldCBwcm9wcyA9IHsuLi50aGlzLnByb3BzfTtcbiAgICBkZWxldGUgcHJvcHNbJ2NsYXNzTmFtZSddO1xuICAgIGRlbGV0ZSBwcm9wc1snbW9kaWZpZXJzJ107XG4gICAgcHJvcHMgPSB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uTW91c2VEb3duOiA6OnRoaXMuaGFuZGxlRG93bixcbiAgICAgIG9uTW91c2VVcDogOjp0aGlzLmhhbmRsZVVwLFxuICAgICAgb25Gb2N1czogOjp0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgb25CbHVyOiA6OnRoaXMuaGFuZGxlQmx1cixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5fZWwgPSBlbFxuICAgIH07XG4gICAgZGVsZXRlIHByb3BzWydjb250YWluZXInXTtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXG4gICAgICA8UmlwcGxlIHJlZj17ZWwgPT4gdGhpcy5fcmlwcGxlID0gZWx9IGtleT1cInJpcHBsZVwiLz4sXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbHN9X19jb250YWluZXJgfSBrZXk9XCJjb250ZW50XCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9zcGFuPlxuICAgIF07XG4gICAgbGV0IGNvbnRhaW5lciA9IChcbiAgICAgIDxidXR0b24gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIpIHtcbiAgICAgIGNvbnRhaW5lciA9IFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNvbnRhaW5lciwgcHJvcHMsIGNoaWxkcmVuKTsgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=
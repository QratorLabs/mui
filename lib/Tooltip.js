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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub29sdGlwLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiVG9vbHRpcCIsImJhc2VDbHMiLCJjbHMiLCJwcm9wcyIsInBvc2l0aW9uIiwiY29udGVudCIsIkNvbXBvbmVudCIsIlRvb2x0aXBDb250YWluZXIiLCJhcnJvd1NpemUiLCJzdGF0ZSIsInNob3ciLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoYW5kbGVNb3VzZUVudGVyIiwiX2hhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiX2hhbmRsZU1vdXNlTGVhdmUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsIl9lbnRlclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJlbnRlckRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiZWwiLCJfZWwiLCJkb21FbCIsImZpbmRET01Ob2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b29sdGlwIiwidGFyZ2V0IiwidGFyZ2V0UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvb2x0aXBSZWN0IiwieERpZmYiLCJ3aWR0aCIsInlEaWZmIiwiaGVpZ2h0IiwicG9pbnQiLCJsZWZ0IiwidG9wIiwib2Zmc2V0IiwicGFkZGluZyIsInhPZmZzZXQiLCJ5T2Zmc2V0Iiwic3R5bGUiLCJjYWxjUG9zaXRpb24iLCJjbGFzc05hbWUiLCJwb3J0YWwiLCJjcmVhdGVQb3J0YWwiLCJnZXRUb29sdGlwIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZHJlbiIsImtleSIsInJlZiIsImhhbmRsZUNoaWxkTW91bnQiLCJjbG9uZUVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOztJQUFZQyxROztBQUNaOztBQUNBOzs7Ozs7Ozs7Ozs7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VSx5QkFBZDtBQUNBLFdBQUtVLFNBQUwsQ0FBZXdDLFNBQWYsR0FBMkIsMEJBQVcsQ0FDcENsRCxPQURvQyxzQkFDdEJBLE9BRHNCLFlBQ0wsS0FBS1EsS0FBTCxDQUFXQyxJQUROLEVBQVgsQ0FBM0I7QUFHQSxVQUFJMEMsU0FBU3JELFNBQVNzRCxZQUFULENBQXNCLEtBQUtDLFVBQUwsRUFBdEIsRUFBeUMsS0FBSzNDLFNBQTlDLENBQWI7O0FBRUEsVUFBSTRDLFFBQVF6RCxNQUFNMEQsUUFBTixDQUFlQyxJQUFmLENBQW9CLEtBQUt0RCxLQUFMLENBQVd1RCxRQUEvQixDQUFaO0FBQUEsVUFDSXZELHFCQUFZb0QsTUFBTXBELEtBQWxCLElBQXlCd0QsS0FBSyxVQUE5QixHQURKO0FBRUF4RCxZQUFNeUQsR0FBTixHQUFjLEtBQUtDLGdCQUFuQixNQUFjLElBQWQ7QUFDQSxhQUFPLENBQ0xULE1BREssRUFFTHRELE1BQU1nRSxZQUFOLENBQW1CUCxLQUFuQixFQUEwQnBELEtBQTFCLENBRkssQ0FBUDtBQUlEOzs7O0VBekc0QkwsTUFBTVEsUyxVQUM1QnlELFksR0FBZTtBQUNwQmpCLFdBQVMsQ0FEVztBQUVwQjFDLFlBQVU7QUFGVSxDO2tCQTJHVEcsZ0IiLCJmaWxlIjoiVG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBiYXNlQ2xzID0gJ3EtbXVpLXRvb2x0aXAnO1xuICAgIGxldCBjbHMgPSBjbGFzc25hbWVzKFtiYXNlQ2xzLCBgJHtiYXNlQ2xzfV8ke3RoaXMucHJvcHMucG9zaXRpb259YF0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsc31fX2Fycm93YH0vPlxuICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBUb29sdGlwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYWRkaW5nOiAyLFxuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gOjp0aGlzLl9oYW5kbGVNb3VzZUVudGVyO1xuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IDo6dGhpcy5faGFuZGxlTW91c2VMZWF2ZTtcbiAgfVxuICBhcnJvd1NpemUgPSAzO1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgfVxuICBfaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICB0aGlzLl9lbnRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IHRydWV9KTtcbiAgICB9LCB0aGlzLnByb3BzLmVudGVyRGVsYXkpO1xuICB9XG4gIF9oYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9lbnRlclRpbWVvdXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG4gIH1cbiAgaGFuZGxlQ2hpbGRNb3VudChlbCkge1xuICAgIGlmIChlbCkge1xuICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgIGxldCBkb21FbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGVsKTtcbiAgICAgIGRvbUVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmhhbmRsZU1vdXNlRW50ZXIpO1xuICAgICAgZG9tRWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2VsKSB7XG4gICAgICBsZXQgZG9tRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLl9lbCk7XG4gICAgICBkb21FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5oYW5kbGVNb3VzZUVudGVyKTtcbiAgICAgIGRvbUVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgfVxuICB9XG4gIGNhbGNQb3NpdGlvbih0b29sdGlwKSB7XG4gICAgaWYgKCF0b29sdGlwIHx8ICF0aGlzLl9lbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGFyZ2V0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5fZWwpO1xuICAgIHRvb2x0aXAgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0b29sdGlwKTtcbiAgICBsZXQgdGFyZ2V0UmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgdG9vbHRpcFJlY3QgPSB0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB4RGlmZiA9ICh0YXJnZXRSZWN0LndpZHRoIC0gdG9vbHRpcFJlY3Qud2lkdGgpIC8gMixcbiAgICAgICAgeURpZmYgPSAodGFyZ2V0UmVjdC5oZWlnaHQgLSB0b29sdGlwUmVjdC5oZWlnaHQpIC8gMjs7XG4gICAgbGV0IHBvaW50ID0ge1xuICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0ICsgeERpZmYsIFxuICAgICAgdG9wOiB0YXJnZXRSZWN0LnRvcCArIHlEaWZmXG4gICAgfTtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5hcnJvd1NpemUgKyB0aGlzLnByb3BzLnBhZGRpbmcsXG4gICAgICAgIHhPZmZzZXQgPSAodG9vbHRpcFJlY3Qud2lkdGggKyB0YXJnZXRSZWN0LndpZHRoKSAvIDIgKyBvZmZzZXQsXG4gICAgICAgIHlPZmZzZXQgPSAodG9vbHRpcFJlY3QuaGVpZ2h0ICsgdGFyZ2V0UmVjdC5oZWlnaHQpIC8gMiArIG9mZnNldDtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHBvaW50LnRvcCAtPSB5T2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHBvaW50LnRvcCArPSB5T2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBwb2ludC5sZWZ0IC09IHhPZmZzZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBwb2ludC5sZWZ0ICs9IHhPZmZzZXRcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IGAke3BvaW50LmxlZnR9cHhgO1xuICAgIHRvb2x0aXAuc3R5bGUudG9wID0gYCR7cG9pbnQudG9wfXB4YDtcbiAgfSAgXG4gIGdldFRvb2x0aXAoKSB7XG4gICAgbGV0IHRvb2x0aXAgPSBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHtcbiAgICAgIHRvb2x0aXAgPSA8VG9vbHRpcCB7Li4udGhpcy5wcm9wc30gcmVmPXs6OnRoaXMuY2FsY1Bvc2l0aW9ufS8+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPSdxLW11aS10b29sdGlwJ1xuICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezMwMH1cbiAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI9e2ZhbHNlfVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZT17ZmFsc2V9PlxuICAgICAgICB7dG9vbHRpcH1cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgIClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJhc2VDbHMgPSAncS1tdWktdG9vbHRpcC1jb250YWluZXInO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoW1xuICAgICAgYmFzZUNscywge1tgJHtiYXNlQ2xzfV9zaG93YF06IHRoaXMuc3RhdGUuc2hvd31cbiAgICBdKTtcbiAgICBsZXQgcG9ydGFsID0gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMuZ2V0VG9vbHRpcCgpLCB0aGlzLmNvbnRhaW5lcik7XG5cbiAgICBsZXQgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICBwcm9wcyA9IHsuLi5jaGlsZC5wcm9wcywga2V5OiAnY2hpbGRyZW4nfTtcbiAgICBwcm9wcy5yZWYgPSA6OnRoaXMuaGFuZGxlQ2hpbGRNb3VudDtcbiAgICByZXR1cm4gW1xuICAgICAgcG9ydGFsLFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcyksXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwQ29udGFpbmVyO1xuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = (_temp = _class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this._active = false;
    _this.handleWindowMove = _this._handleWindowMove.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('mousemove', this.handleWindowMove);
      this.setValue(this.props.value);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('mousemove', this.handleWindowMove);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value != nextProps.value && nextProps.hasOwnProperty('value')) {
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'getValueByMousePosition',
    value: function getValueByMousePosition(_ref) {
      var x = _ref.x,
          y = _ref.y;

      var sliderEl = ReactDOM.findDOMNode(this._sliderEl);
      var sliderRect = sliderEl.getBoundingClientRect();
      x = x - sliderRect.x;
      var width = sliderRect.width;
      var value = x / width * (this.props.max - this.props.min) + this.props.min;
      if (value < this.props.min) {
        value = this.props.min;
      }
      if (value > this.props.max) {
        value = this.props.max;
      }
      return Math.ceil(value);
    }
  }, {
    key: '_handleWindowMove',
    value: function _handleWindowMove(e) {
      if (e.buttons !== 1) {
        this._active = false;
      }
      if (!this._active) {
        return;
      }
      var value = this.getValueByMousePosition({ x: e.screenX, y: screenY });
      this.setValue(value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var offset = value * 100 / (this.props.max - this.props.min);
      ReactDOM.findDOMNode(this._pointEl).style.left = offset + '%';
      ReactDOM.findDOMNode(this._activeLineEl).style.width = offset + '%';
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this._active = true;
    }
  }, {
    key: 'handleAreaClick',
    value: function handleAreaClick(e) {
      var value = this.getValueByMousePosition({ x: e.screenX, y: screenY });
      this.setValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var baseCls = 'q-mui-slider';
      var _props = this.props,
          modifiers = _props.modifiers,
          className = _props.className;

      modifiers = modifiers.split(/\s+/);
      var cls = (0, _classnames2.default)([baseCls, className].concat(_toConsumableArray(modifiers.map(function (m) {
        return baseCls + '_' + m;
      }))));
      return React.createElement(
        'div',
        { className: cls, ref: function ref(el) {
            return _this2._sliderEl = el;
          } },
        React.createElement('div', {
          className: baseCls + '__click-area',
          onClick: this.handleAreaClick.bind(this) }),
        React.createElement('div', { className: baseCls + '__line' }),
        React.createElement('div', {
          ref: function ref(el) {
            return _this2._activeLineEl = el;
          },
          className: baseCls + '__active-line' }),
        React.createElement('div', {
          ref: function ref(el) {
            return _this2._pointEl = el;
          },
          className: baseCls + '__point',
          onDragStart: function onDragStart(e) {
            return e.preventDefault();
          },
          onMouseDown: this.handleMouseDown.bind(this) })
      );
    }
  }]);

  return Slider;
}(React.Component), _class.defaultProps = {
  modifiers: '',
  min: 0,
  max: 100,
  value: 0
}, _temp);
exports.default = Slider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TbGlkZXIuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJTbGlkZXIiLCJwcm9wcyIsIl9hY3RpdmUiLCJoYW5kbGVXaW5kb3dNb3ZlIiwiX2hhbmRsZVdpbmRvd01vdmUiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VmFsdWUiLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXh0UHJvcHMiLCJoYXNPd25Qcm9wZXJ0eSIsIngiLCJ5Iiwic2xpZGVyRWwiLCJmaW5kRE9NTm9kZSIsIl9zbGlkZXJFbCIsInNsaWRlclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm1heCIsIm1pbiIsIk1hdGgiLCJjZWlsIiwiZSIsImJ1dHRvbnMiLCJnZXRWYWx1ZUJ5TW91c2VQb3NpdGlvbiIsInNjcmVlblgiLCJzY3JlZW5ZIiwib2Zmc2V0IiwiX3BvaW50RWwiLCJzdHlsZSIsImxlZnQiLCJfYWN0aXZlTGluZUVsIiwib25DaGFuZ2UiLCJiYXNlQ2xzIiwibW9kaWZpZXJzIiwiY2xhc3NOYW1lIiwic3BsaXQiLCJjbHMiLCJtYXAiLCJtIiwiZWwiLCJoYW5kbGVBcmVhQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZU1vdXNlRG93biIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOztJQUFZQyxROztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0lBR01DLE07OztBQU9KLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBMEIsTUFBS0MsaUJBQS9CO0FBSGlCO0FBSWxCOzs7O3dDQUNtQjtBQUNsQkMsZUFBU0MsSUFBVCxDQUFjQyxnQkFBZCxDQUErQixXQUEvQixFQUE0QyxLQUFLSixnQkFB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LE1BQU0sMkJBQ1JKLE9BRFEsRUFDQ0UsU0FERCw0QkFFTEQsVUFBVUksR0FBVixDQUFjO0FBQUEsZUFBUUwsT0FBUixTQUFtQk0sQ0FBbkI7QUFBQSxPQUFkLENBRkssR0FBVjtBQUlBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0YsR0FBaEIsRUFBcUIsS0FBSztBQUFBLG1CQUFNLE9BQUt2QixTQUFMLEdBQWlCMEIsRUFBdkI7QUFBQSxXQUExQjtBQUNFO0FBQ0kscUJBQWNQLE9BQWQsaUJBREo7QUFFSSxtQkFBVyxLQUFLUSxlQUFoQixNQUFXLElBQVgsQ0FGSixHQURGO0FBSUUscUNBQUssV0FBY1IsT0FBZCxXQUFMLEdBSkY7QUFLRTtBQUNJLGVBQUs7QUFBQSxtQkFBTSxPQUFLRixhQUFMLEdBQXFCUyxFQUEzQjtBQUFBLFdBRFQ7QUFFSSxxQkFBY1AsT0FBZCxrQkFGSixHQUxGO0FBUUU7QUFDSSxlQUFLO0FBQUEsbUJBQU0sT0FBS0wsUUFBTCxHQUFnQlksRUFBdEI7QUFBQSxXQURUO0FBRUkscUJBQWNQLE9BQWQsWUFGSjtBQUdJLHVCQUFhO0FBQUEsbUJBQUtYLEVBQUVvQixjQUFGLEVBQUw7QUFBQSxXQUhqQjtBQUlJLHVCQUFlLEtBQUtDLGVBQXBCLE1BQWUsSUFBZixDQUpKO0FBUkYsT0FERjtBQWdCRDs7OztFQXZGa0JoRCxNQUFNaUQsUyxVQUNsQkMsWSxHQUFlO0FBQ3BCWCxhQUFXLEVBRFM7QUFFcEJmLE9BQUssQ0FGZTtBQUdwQkQsT0FBSyxHQUhlO0FBSXBCWixTQUFPO0FBSmEsQztrQkF5RlRULE0iLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbmNsYXNzIFNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbW9kaWZpZXJzOiAnJyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgdmFsdWU6IDBcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZVdpbmRvd01vdmUgPSA6OnRoaXMuX2hhbmRsZVdpbmRvd01vdmU7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZVdpbmRvd01vdmUpO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5wcm9wcy52YWx1ZSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZVdpbmRvd01vdmUpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT0gbmV4dFByb3BzLnZhbHVlICYmIG5leHRQcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgIH0gXG4gIH1cbiAgZ2V0VmFsdWVCeU1vdXNlUG9zaXRpb24oe3gsIHl9KSB7XG4gICAgbGV0IHNsaWRlckVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5fc2xpZGVyRWwpO1xuICAgIGxldCBzbGlkZXJSZWN0ID0gc2xpZGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgeCA9IHggLSBzbGlkZXJSZWN0Lng7XG4gICAgbGV0IHdpZHRoID0gc2xpZGVyUmVjdC53aWR0aDtcbiAgICBsZXQgdmFsdWUgPSAoeCAvIHdpZHRoKSAqICh0aGlzLnByb3BzLm1heCAtIHRoaXMucHJvcHMubWluKSArIHRoaXMucHJvcHMubWluO1xuICAgIGlmICh2YWx1ZSA8IHRoaXMucHJvcHMubWluKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvcHMubWluO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiB0aGlzLnByb3BzLm1heCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLm1heDtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguY2VpbCh2YWx1ZSk7XG4gIH1cbiAgX2hhbmRsZVdpbmRvd01vdmUoZSkge1xuICAgIGlmIChlLmJ1dHRvbnMgIT09IDEpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlQnlNb3VzZVBvc2l0aW9uKHt4OiBlLnNjcmVlblgsIHk6IHNjcmVlbll9KTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGxldCBvZmZzZXQgPSB2YWx1ZSAqIDEwMCAvICh0aGlzLnByb3BzLm1heCAtIHRoaXMucHJvcHMubWluKTtcbiAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLl9wb2ludEVsKS5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0fSVgO1xuICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuX2FjdGl2ZUxpbmVFbCkuc3R5bGUud2lkdGggPSBgJHtvZmZzZXR9JWA7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVNb3VzZURvd24oZSkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gIH1cbiAgaGFuZGxlQXJlYUNsaWNrKGUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlQnlNb3VzZVBvc2l0aW9uKHt4OiBlLnNjcmVlblgsIHk6IHNjcmVlbll9KTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJhc2VDbHMgPSAncS1tdWktc2xpZGVyJztcbiAgICBsZXQgeyBtb2RpZmllcnMsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuc3BsaXQoL1xccysvKTtcbiAgICBsZXQgY2xzID0gY2xhc3NuYW1lcyhbXG4gICAgICBiYXNlQ2xzLCBjbGFzc05hbWUsXG4gICAgICAuLi5tb2RpZmllcnMubWFwKG0gPT4gYCR7YmFzZUNsc31fJHttfWApXG4gICAgXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHJlZj17ZWwgPT4gdGhpcy5fc2xpZGVyRWwgPSBlbH0+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbHN9X19jbGljay1hcmVhYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9ezo6dGhpcy5oYW5kbGVBcmVhQ2xpY2t9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsc31fX2xpbmVgfT48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtlbCA9PiB0aGlzLl9hY3RpdmVMaW5lRWwgPSBlbH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsc31fX2FjdGl2ZS1saW5lYH0+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17ZWwgPT4gdGhpcy5fcG9pbnRFbCA9IGVsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xzfV9fcG9pbnRgfVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgb25Nb3VzZURvd249ezo6dGhpcy5oYW5kbGVNb3VzZURvd259PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG4iXX0=
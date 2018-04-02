'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Ripple = require('../Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this._mouseDown = false;

    _this.onDocumentMouseUp = _this._onDocumentMouseUp.bind(_this);
    return _this;
  }

  _createClass(Option, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onDocumentMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        if (nextProps.active) {
          this._ripple.start({
            rect: this.getRect(),
            center: true,
            pulsate: true
          });
        } else {
          this._ripple.stop();
        }
      }
    }
  }, {
    key: '_onDocumentMouseUp',
    value: function _onDocumentMouseUp(e) {
      if (e.button !== 0) {
        return;
      }
      this.props.onClickOutside(e);
    }
  }, {
    key: 'getRect',
    value: function getRect() {
      return ReactDOM.findDOMNode(this._el).getBoundingClientRect();
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      if (event.button !== 0) {
        return;
      }
      this._mouseDown = true;
      this.props.onMouseDown(event);
      var rect = this.getRect();
      this._ripple.start({ rect: rect, event: event });
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var _this2 = this;

      event.stopPropagation();
      if (event.button !== 0) {
        return;
      }
      this._mouseDown = false;
      this._ripple.stop();
      setTimeout(function () {
        return _this2.props.onMouseUp(event);
      }, 200);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref,
          _this3 = this;

      var baseCls = 'q-mui-option';
      var cls = (0, _classnames2.default)([baseCls, (_ref = {}, _defineProperty(_ref, baseCls + '_active', this.props.active), _defineProperty(_ref, baseCls + '_divide-after', this.props.divideAfter), _defineProperty(_ref, baseCls + '_divide-before', this.props.divideBefore), _ref)]);
      return React.createElement(
        'div',
        {
          className: cls,
          onMouseDown: this.handleMouseDown.bind(this),
          onMouseUp: this.handleMouseUp.bind(this),
          ref: function ref(el) {
            return _this3._el = el;
          } },
        React.createElement(_Ripple2.default, { ref: function ref(el) {
            return _this3._ripple = el;
          } }),
        React.createElement(
          'div',
          { className: baseCls + '__container' },
          this.props.label
        )
      );
    }
  }]);

  return Option;
}(React.Component);

exports.default = Option;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3QvT3B0aW9uLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiT3B0aW9uIiwicHJvcHMiLCJfbW91c2VEb3duIiwib25Eb2N1bWVudE1vdXNlVXAiLCJfb25Eb2N1bWVudE1vdXNlVXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV4dFByb3BzIiwiYWN0aXZlIiwiX3JpcHBsZSIsInN0YXJ0IiwicmVjdCIsImdldFJlY3QiLCJjZW50ZXIiLCJwdWxzYXRlIiwic3RvcCIsImUiLCJidXR0b24iLCJvbkNsaWNrT3V0c2lkZSIsImZpbmRET01Ob2RlIiwiX2VsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZXZlbnQiLCJvbk1vdXNlRG93biIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJvbk1vdXNlVXAiLCJiYXNlQ2xzIiwiY2xzIiwiZGl2aWRlQWZ0ZXIiLCJkaXZpZGVCZWZvcmUiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZVVwIiwiZWwiLCJsYWJlbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsUTs7QUFDWjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1DLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBQUEsVUFJbkJDLFVBSm1CLEdBSU4sS0FKTTs7QUFFakIsVUFBS0MsaUJBQUwsR0FBMkIsTUFBS0Msa0JBQWhDO0FBRmlCO0FBR2xCOzs7O3dDQUVtQjtBQUNsQkMsZUFBU0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS0gsaUJBQTFDO0FBQ0Q7OzsyQ0FDc0I7QUFDckJFLGVBQVNFLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtKLGlCQUE3QztBQUNEOzs7OENBQ3lCSyxTLEVBQVc7QUFDbkMsVUFBSUEsVUFBVUMsTUFBVixLQUFxQixLQUFLUixLQUFMLENBQVdRLE1BQXBDLEVBQTRDO0FBQzFDLFlBQUlELFVBQVVDLE1BQWQsRUFBc0I7QUFDcEIsZUFBS0MsT0FBTCxDQUFhQyxLQUFiLENBQW1CO0FBQ2pCQyxrQkFBTSxLQUFLQyxPQUFMLEVBRFc7QUFFakJDLG9CQUFRLElBRlM7QUFHakJDLHFCQUFTO0FBSFEsV0FBbkI7QUFLRCxTQU5ELE1BTU87QUFDTCxlQUFLTCxPQUFMLENBQWFNLElBQWI7QUFDRDtBQUNGO0FBQ0Y7Ozt1Q0FDa0JDLEMsRUFBRztBQUNwQixVQUFJQSxFQUFFQyxNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEI7QUFDRDtBQUNELFdBQUtqQixLQUFMLENBQVdrQixjQUFYLENBQTBCRixDQUExQjtBQUNEOzs7OEJBQ1M7QUFDUixhQUFPbEIsU0FBU3FCLFdBQVQsQ0FBcUIsS0FBS0MsR0FBMUIsRUFBK0JDLHFCQUEvQixFQUFQO0FBQ0Q7OztvQ0FDZUMsSyxFQUFPO0FBQ3JCLFVBQUlBLE1BQU1MLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDRDtBQUNELFdBQUtoQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0QsS0FBTCxDQUFXdUIsV0FBWCxDQUF1QkQsS0FBdkI7QUFDQSxVQUFJWCxPQUFPLEtBQUtDLE9BQUwsRUFBWDtBQUNBLFdBQUtILE9BQUwsQ0FBYUMsS0FBYixDQUFtQixFQUFDQyxVQUFELEVBQU9XLFlBQVAsRUFBbkI7QUFDRDs7O2tDQUNhQSxLLEVBQU87QUFBQTs7QUFDbkJBLFlBQU1FLGVBQU47QUFDQSxVQUFJRixNQUFNTCxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCO0FBQ0Q7QUFDRCxXQUFLaEIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUtRLE9BQUwsQ0FBYU0sSUFBYjtBQUNBVSxpQkFBVztBQUFBLGVBQU0sT0FBS3pCLEtBQUwsQ0FBVzBCLFNBQVgsQ0FBcUJKLEtBQXJCLENBQU47QUFBQSxPQUFYLEVBQThDLEdBQTlDO0FBQ0Q7Ozs2QkFDUTtBQUFBO0FBQUE7O0FBQ1AsVUFBSUssVUFBVSxjQUFkO0FBQ0EsVUFBSUMsTUFBTSwwQkFBVyxDQUFDRCxPQUFELG9DQUNmQSxPQURlLGNBQ0ksS0FBSzNCLEtBQUwsQ0FBV1EsTUFEZix5QkFFZm1CLE9BRmUsb0JBRVUsS0FBSzNCLEtBQUwsQ0FBVzZCLFdBRnJCLHlCQUdmRixPQUhlLHFCQUdXLEtBQUszQixLQUFMLENBQVc4QixZQUh0QixTQUFYLENBQVY7QUFLQSxhQUNFO0FBQUE7QUFBQTtBQUNJLHFCQUFXRixHQURmO0FBRUksdUJBQWUsS0FBS0csZUFBcEIsTUFBZSxJQUFmLENBRko7QUFHSSxxQkFBYSxLQUFLQyxhQUFsQixNQUFhLElBQWIsQ0FISjtBQUlJLGVBQUs7QUFBQSxtQkFBTSxPQUFLWixHQUFMLEdBQVdhLEVBQWpCO0FBQUEsV0FKVDtBQUtFLGdEQUFRLEtBQUs7QUFBQSxtQkFBTSxPQUFLeEIsT0FBTCxHQUFld0IsRUFBckI7QUFBQSxXQUFiLEdBTEY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFjTixPQUFkLGdCQUFMO0FBQ0csZUFBSzNCLEtBQUwsQ0FBV2tDO0FBRGQ7QUFORixPQURGO0FBWUQ7Ozs7RUF2RWtCckMsTUFBTXNDLFM7O2tCQTBFWnBDLE0iLCJmaWxlIjoiT3B0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vUmlwcGxlJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRNb3VzZVVwID0gOjp0aGlzLl9vbkRvY3VtZW50TW91c2VVcDtcbiAgfVxuICBfbW91c2VEb3duID0gZmFsc2U7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jdW1lbnRNb3VzZVVwKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY3VtZW50TW91c2VVcCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmFjdGl2ZSAhPT0gdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5zdGFydCh7XG4gICAgICAgICAgcmVjdDogdGhpcy5nZXRSZWN0KCksXG4gICAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICAgIHB1bHNhdGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yaXBwbGUuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfb25Eb2N1bWVudE1vdXNlVXAoZSkge1xuICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2xpY2tPdXRzaWRlKGUpO1xuICB9XG4gIGdldFJlY3QoKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMuX2VsKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuICBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgbGV0IHJlY3QgPSB0aGlzLmdldFJlY3QoKTtcbiAgICB0aGlzLl9yaXBwbGUuc3RhcnQoe3JlY3QsIGV2ZW50fSk7XG4gIH1cbiAgaGFuZGxlTW91c2VVcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5fcmlwcGxlLnN0b3AoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMub25Nb3VzZVVwKGV2ZW50KSwgMjAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJhc2VDbHMgPSAncS1tdWktb3B0aW9uJztcbiAgICBsZXQgY2xzID0gY2xhc3NuYW1lcyhbYmFzZUNscywge1xuICAgICAgW2Ake2Jhc2VDbHN9X2FjdGl2ZWBdOiB0aGlzLnByb3BzLmFjdGl2ZSxcbiAgICAgIFtgJHtiYXNlQ2xzfV9kaXZpZGUtYWZ0ZXJgXTogdGhpcy5wcm9wcy5kaXZpZGVBZnRlcixcbiAgICAgIFtgJHtiYXNlQ2xzfV9kaXZpZGUtYmVmb3JlYF06IHRoaXMucHJvcHMuZGl2aWRlQmVmb3JlXG4gICAgfV0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgb25Nb3VzZURvd249ezo6dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgb25Nb3VzZVVwPXs6OnRoaXMuaGFuZGxlTW91c2VVcH1cbiAgICAgICAgICByZWY9e2VsID0+IHRoaXMuX2VsID0gZWx9PlxuICAgICAgICA8UmlwcGxlIHJlZj17ZWwgPT4gdGhpcy5fcmlwcGxlID0gZWx9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbHN9X19jb250YWluZXJgfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjtcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = (_temp2 = _class = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.isOpen = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popover, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isOpen) {
        this.el = document.createElement('div');
        this.el.className = 'q-mui-popover';
        this.el.style.position = 'fixed';
        this.el.style.left = 0;
        this.el.style.top = 10;
        this.el.style.zIndex = opts.zIndex || 1000;
        this.el.style.width = 30;
        this.el.style.height = 30;
        this.el.style.background = 'red';
        // this.constrolBodyScroll();
        this.calcPosition(opts.targetEl);
        document.body.appendChild(this.el);
        this.portal = ReactDOM.createPortal(this.props.children, this.el);
        this.isOpen = true;
      }
    }
  }, {
    key: 'calcPosition',
    value: function calcPosition(targetEl) {
      var target = ReactDOM.findDOMNode(targetEl);
      var targetRect = target.getBoundingClientRect();
      var _targetRect$top = targetRect.top,
          top = _targetRect$top.top,
          left = _targetRect$top.left;
    }
  }, {
    key: 'close',
    value: function close() {
      document.body.removeChild(this.el);
      document.body.style.overflow = null;
      this.isOpen = false;
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {}
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Popover;
}(React.Component), _class.defaultProps = {
  // hPos: ['center', 'center'],
  // vPos: ['bottom', 'top'],
}, _temp2);
exports.default = Popover;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qb3BvdmVyLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiUG9wb3ZlciIsImlzT3BlbiIsImNsb3NlIiwib3B0cyIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJjYWxjUG9zaXRpb24iLCJ0YXJnZXRFbCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBvcnRhbCIsImNyZWF0ZVBvcnRhbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0YXJnZXQiLCJmaW5kRE9NTm9kZSIsInRhcmdldFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZW1vdmVDaGlsZCIsIm92ZXJmbG93IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLFE7Ozs7Ozs7Ozs7SUFFTkMsTzs7Ozs7Ozs7Ozs7Ozs7d0xBRUpDLE0sR0FBUyxLOzs7OzsyQ0FPYztBQUNyQixXQUFLQyxLQUFMO0FBQ0Q7OzsyQkFFYTtBQUFBLFVBQVRDLElBQVMsdUVBQUosRUFBSTs7QUFDWixVQUFJLENBQUMsS0FBS0YsTUFBVixFQUFrQjtBQUNoQixhQUFLRyxFQUFMLEdBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLGFBQUtGLEVBQUwsQ0FBUUcsU0FBUixHQUFvQixlQUFwQjtBQUNBLGFBQUtILEVBQUwsQ0FBUUksS0FBUixDQUFjQyxRQUFkLEdBQXlCLE9BQXpCO0FBQ0EsYUFBS0wsRUFBTCxDQUFRSSxLQUFSLENBQWNFLElBQWQsR0FBcUIsQ0FBckI7QUFDQSxhQUFLTixFQUFMLENBQVFJLEtBQVIsQ0FBY0csR0FBZCxHQUFvQixFQUFwQjtBQUNBLGFBQUtQLEVBQUwsQ0FBUUksS0FBUixDQUFjSSxNQUFkLEdBQXVCVCxLQUFLUyxNQUFMLElBQWUsSUFBdEM7QUFDQSxhQUFLUixFQUFMLENBQVFJLEtBQVIsQ0FBY0ssS0FBZCxHQUFzQixFQUF0QjtBQUNBLGFBQUtULEVBQUwsQ0FBUUksS0FBUixDQUFjTSxNQUFkLEdBQXVCLEVBQXZCO0FBQ0EsYUFBS1YsRUFBTCxDQUFRSSxLQUFSLENBQWNPLFVBQWQsR0FBMkIsS0FBM0I7QUFDQTtBQUNBLGFBQUtDLFlBQUwsQ0FBa0JiLEtBQUtjLFFBQXZCO0FBQ0FaLGlCQUFTYSxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS2YsRUFBL0I7QUFDQSxhQUFLZ0IsTUFBTCxHQUFjckIsU0FBU3NCLFlBQVQsQ0FBc0IsS0FBS0MsS0FBTCxDQUFXQyxRQUFqQyxFQUEyQyxLQUFLbkIsRUFBaEQsQ0FBZDtBQUNBLGFBQUtILE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRjs7O2lDQUNZZ0IsUSxFQUFVO0FBQ3JCLFVBQUlPLFNBQVN6QixTQUFTMEIsV0FBVCxDQUFxQlIsUUFBckIsQ0FBYjtBQUNBLFVBQUlTLGFBQWFGLE9BQU9HLHFCQUFQLEVBQWpCO0FBRnFCLDRCQUdERCxXQUFXZixHQUhWO0FBQUEsVUFHZkEsR0FIZSxtQkFHZkEsR0FIZTtBQUFBLFVBR1ZELElBSFUsbUJBR1ZBLElBSFU7QUFJdEI7Ozs0QkFDTztBQUNOTCxlQUFTYSxJQUFULENBQWNVLFdBQWQsQ0FBMEIsS0FBS3hCLEVBQS9CO0FBQ0FDLGVBQVNhLElBQVQsQ0FBY1YsS0FBZCxDQUFvQnFCLFFBQXBCLEdBQStCLElBQS9CO0FBQ0EsV0FBSzVCLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7OztxQ0FDZ0IsQ0FFaEI7Ozs2QkFDUTtBQUNQLGFBQU8sSUFBUDtBQUNEOzs7O0VBOUNtQkgsTUFBTWdDLFMsVUFJbkJDLFksR0FBZTtBQUNwQjtBQUNBO0FBRm9CLEM7a0JBNkNUL0IsTyIsImZpbGUiOiJQb3BvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAvLyBoUG9zOiBbJ2NlbnRlcicsICdjZW50ZXInXSxcbiAgICAvLyB2UG9zOiBbJ2JvdHRvbScsICd0b3AnXSxcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuICBcbiAgb3BlbihvcHRzPXt9KSB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSAncS1tdWktcG9wb3Zlcic7XG4gICAgICB0aGlzLmVsLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xuICAgICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gMTA7XG4gICAgICB0aGlzLmVsLnN0eWxlLnpJbmRleCA9IG9wdHMuekluZGV4IHx8IDEwMDA7XG4gICAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gMzA7XG4gICAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IDMwO1xuICAgICAgdGhpcy5lbC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XG4gICAgICAvLyB0aGlzLmNvbnN0cm9sQm9keVNjcm9sbCgpO1xuICAgICAgdGhpcy5jYWxjUG9zaXRpb24ob3B0cy50YXJnZXRFbCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgICAgdGhpcy5wb3J0YWwgPSBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5lbCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNhbGNQb3NpdGlvbih0YXJnZXRFbCkge1xuICAgIGxldCB0YXJnZXQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0YXJnZXRFbCk7XG4gICAgbGV0IHRhcmdldFJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHsgdG9wLCBsZWZ0IH0gPSB0YXJnZXRSZWN0LnRvcDtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gIH1cbiAgdXBkYXRlUG9zaXRpb24oKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcjtcbiJdfQ==
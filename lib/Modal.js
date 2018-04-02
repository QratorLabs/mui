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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Nb2RhbC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIk1vZGFsIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIl9oYW5kbGVDbGljayIsImUiLCJvbkNsaWNrIiwiZmluZERPTU5vZGUiLCJfZWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbnRhaW5lckNsaWNrIiwiYmFzZUNscyIsImNscyIsImNsYXNzTmFtZSIsImVsIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJNb2RhbENvbnRhaW5lciIsInN0YXRlIiwib3BlbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9oYW5kbGVDb250YWluZXJDbGljayIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic3R5bGUiLCJvdmVyZmxvdyIsIl9tb2RhbENsaWNrZWQiLCJjbG9zZU9uQ2xpY2tPdXRzaWRlIiwiY2xvc2UiLCJtb2RhbCIsImhhbmRsZU1vZGFsQ2xpY2siLCJfbW9kYWwiLCJQcm9taXNlIiwic2V0U3RhdGUiLCJyZXNvbHZlIiwib25DbG9zZSIsImNvbnN0cm9sQm9keVNjcm9sbCIsImNyZWF0ZVBvcnRhbCIsImdldE1vZGFsIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7SUFBWUEsSzs7QUFDWjs7SUFBWUMsUTs7QUFDWjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQyxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxXQUFMLEdBQXFCLE1BQUtDLFlBQTFCO0FBRmlCO0FBR2xCOzs7O2lDQUNZQyxDLEVBQUc7QUFDZCxXQUFLSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJELENBQW5CO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEJMLGVBQVNPLFdBQVQsQ0FBcUIsS0FBS0MsR0FBMUIsRUFBK0JDLGdCQUEvQixD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QUFDTixXQUFLRCxRQUFMLENBQWMsRUFBQ2hCLE1BQU0sS0FBUCxFQUFkO0FBQ0EsVUFBSSxLQUFLbEIsS0FBTCxDQUFXb0MsT0FBZixFQUF3QjtBQUN0QixhQUFLcEMsS0FBTCxDQUFXb0MsT0FBWDtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUNQLFdBQUtDLGtCQUFMO0FBQ0EsVUFBSTNCLFVBQVUsdUJBQWQ7QUFDQSxXQUFLRyxFQUFMLENBQVFELFNBQVIsR0FBb0IsMEJBQVcsQ0FDN0JGLE9BRDZCLHNCQUNmQSxPQURlLFlBQ0UsS0FBS08sS0FBTCxDQUFXQyxJQURiLEVBQVgsQ0FBcEI7QUFHQSxhQUFPcEIsU0FBU3dDLFlBQVQsQ0FDTCxLQUFLQyxRQUFMLEVBREssRUFFTCxLQUFLMUIsRUFGQSxDQUFQO0FBSUQ7Ozs7RUFsRjBCaEIsTUFBTWtCLFMsVUFDMUJ5QixZLEdBQWU7QUFDcEJaLHVCQUFxQjtBQURELEM7a0JBb0ZUWixjIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENTU1RyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IDo6dGhpcy5faGFuZGxlQ2xpY2s7XG4gIH1cbiAgX2hhbmRsZUNsaWNrKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5fZWwpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5fZWwpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDb250YWluZXJDbGljayk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBiYXNlQ2xzID0gJ3EtbXVpLW1vZGFsJztcbiAgICBsZXQgY2xzID0gY2xhc3NuYW1lcyhbYmFzZUNscywgdGhpcy5wcm9wcy5jbGFzc05hbWVdKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2VsID0+IHRoaXMuX2VsID0gZWx9IGNsYXNzTmFtZT17Y2xzfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlXG4gIH1cbiAgc3RhdGUgPSB7XG4gICAgb3BlbjogZmFsc2VcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc05hbWUgPSAncS1tdWktbW9kYWwtY29udGFpbmVyJztcbiAgICB0aGlzLmhhbmRsZUNvbnRhaW5lckNsaWNrID0gOjp0aGlzLl9oYW5kbGVDb250YWluZXJDbGlja1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ29udGFpbmVyQ2xpY2spO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNvbnRhaW5lckNsaWNrKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuICB9XG4gIF9oYW5kbGVDb250YWluZXJDbGljayhlKSB7XG4gICAgaWYgKHRoaXMuX21vZGFsQ2xpY2tlZCkge1xuICAgICAgdGhpcy5fbW9kYWxDbGlja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmNsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlTW9kYWxDbGljaygpIHtcbiAgICB0aGlzLl9tb2RhbENsaWNrZWQgPSB0cnVlO1xuICB9XG4gIGdldE1vZGFsKCkge1xuICAgIGxldCBtb2RhbCA9IG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbW9kYWwgPSAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBrZXk9J21vZGFsJ1xuICAgICAgICAgICAgb25DbGljaz17Ojp0aGlzLmhhbmRsZU1vZGFsQ2xpY2t9XG4gICAgICAgICAgICByZWY9e2VsID0+IHRoaXMuX21vZGFsID0gZWx9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L01vZGFsPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT17J3EtbXVpLW1vZGFsJ31cbiAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXszMDB9XG4gICAgICAgICAgdHJhbnNpdGlvbkxlYXZlPXtmYWxzZX0+XG4gICAgICAgIHttb2RhbH1cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgIClcbiAgfVxuICBjb25zdHJvbEJvZHlTY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgb3BlbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiB0cnVlfSwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY29uc3Ryb2xCb2R5U2Nyb2xsKCk7XG4gICAgbGV0IGJhc2VDbHMgPSAncS1tdWktbW9kYWwtY29udGFpbmVyJztcbiAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoW1xuICAgICAgYmFzZUNscywge1tgJHtiYXNlQ2xzfV9vcGVuYF06IHRoaXMuc3RhdGUub3Blbn1cbiAgICBdKTtcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgICAgdGhpcy5nZXRNb2RhbCgpLFxuICAgICAgdGhpcy5lbCxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ29udGFpbmVyO1xuIl19
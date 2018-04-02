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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ecm9wZG93bi9Ecm9wZG93bkl0ZW0uanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJQcm9wVHlwZXMiLCJEcm9wZG93bkl0ZW0iLCJlIiwicHJvcHMiLCJvbkNsaWNrIiwiY29udGV4dCIsImRyb3Bkb3duSXRlbUNsaWNrIiwiZXZlbnQiLCJlbCIsImZpbmRET01Ob2RlIiwiX2VsIiwiX3JpcHBsZSIsInN0YXJ0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRldGFpbCIsInByZXZlbnREZWZhdWx0Iiwic3RvcCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwibXVsdGlsaW5lIiwicmVmIiwiaGFuZGxlQ2xpY2siLCJvbk1vdXNlRG93biIsImhhbmRsZU1vdXNlRG93biIsIm9uTW91c2VVcCIsImhhbmRsZU1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiLCJoYW5kbGVNb3VzZUxlYXZlIiwiY29udGFpbmVyIiwiY2xvbmVFbGVtZW50IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLFE7O0FBQ1o7O0lBQVlDLFM7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Z0NBU1FDLEMsRUFBRztBQUNiLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxPQUFmLEVBQXdCO0FBQ3RCLGFBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkYsQ0FBbkIsRUFBc0IsSUFBdEI7QUFDRDtBQUNELFdBQUtHLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0JKLENBQS9CLEVBQWtDLElBQWxDO0FBQ0Q7OztvQ0FFZUssSyxFQUFPO0FBQ3JCLFVBQUlDLEtBQUtULFNBQVNVLFdBQVQsQ0FBcUIsS0FBS0MsR0FBMUIsQ0FBVDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsS0FBYixDQUFtQjtBQUNqQkwsb0JBRGlCLEVBQ1ZNLE1BQU1MLEdBQUdNLHFCQUFIO0FBREksT0FBbkI7QUFHQSxVQUFJUCxNQUFNUSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEJSLGNBQU1TLGNBQU47QUFDRDtBQUNGOzs7b0NBRWU7QUFDZCxXQUFLTCxPQUFMLENBQWFNLElBQWI7QUFDRDs7O3VDQUVrQjtBQUNqQixXQUFLTixPQUFMLENBQWFNLElBQWI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBSUMsV0FBVyxDQUNiLHdDQUFRLEtBQUs7QUFBQSxpQkFBTSxPQUFLUCxPQUFMLEdBQWVILEVBQXJCO0FBQUEsU0FBYixFQUFzQyxLQUFJLFFBQTFDLEdBRGEsRUFFYjtBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmLEVBQTBDLEtBQUksU0FBOUM7QUFDRyxhQUFLTCxLQUFMLENBQVdlO0FBRGQsT0FGYSxDQUFmO0FBTUEsVUFBSUMsWUFBWSwwQkFBVyxDQUFDLEtBQUtoQixLQUFMLENBQVdnQixTQUFaLEVBQXVCLGlCQUF2QixFQUEwQztBQUNuRSxxQ0FBNkIsS0FBS2hCLEtBQUwsQ0FBV2lCO0FBRDJCLE9BQTFDLENBQVgsQ0FBaEI7QUFHQSxVQUFJakIscUJBQ0MsS0FBS0EsS0FETjtBQUVGZ0IsNEJBRkU7QUFHRkUsYUFBSztBQUFBLGlCQUFNLE9BQUtYLEdBQUwsR0FBV0YsRUFBakI7QUFBQSxTQUhIO0FBSUZKLGlCQUFXLEtBQUtrQixXQUFoQixNQUFXLElBQVgsQ0FKRTtBQUtGQyxxQkFBZSxLQUFLQyxlQUFwQixNQUFlLElBQWYsQ0FMRTtBQU1GQyxtQkFBYSxLQUFLQyxhQUFsQixNQUFhLElBQWIsQ0FORTtBQU9GQyxzQkFBZ0IsS0FBS0MsZ0JBQXJCLE1BQWdCLElBQWhCOztBQVBFLFFBQUo7QUFVQSxhQUFPekIsTUFBTSxXQUFOLENBQVA7QUFDQSxhQUFPQSxNQUFNLFdBQU4sQ0FBUDtBQUNBLFVBQUksS0FBS0EsS0FBTCxDQUFXMEIsU0FBZixFQUEwQjtBQUN4QixlQUFPL0IsTUFBTWdDLFlBQU4sQ0FBbUIsS0FBSzNCLEtBQUwsQ0FBVzBCLFNBQTlCLEVBQXlDMUIsS0FBekMsRUFBZ0RlLFFBQWhELENBQVA7QUFDRDtBQUNELGFBQ0U7QUFBQTtBQUFTZixhQUFUO0FBQ0dlO0FBREgsT0FERjtBQUtEOzs7O0VBaEV3QnBCLE1BQU1pQyxTLFVBQ3hCQyxZLEdBQWU7QUFDcEJiLGFBQVc7QUFEUyxDLFNBSWZjLFksR0FBZTtBQUNwQjNCLHFCQUFtQk4sVUFBVWtDO0FBRFQsQztrQkE4RFRqQyxZIiwiZmlsZSI6IkRyb3Bkb3duSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vUmlwcGxlJ1xuXG5jbGFzcyBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJydcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgZHJvcGRvd25JdGVtQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmRyb3Bkb3duSXRlbUNsaWNrKGUsIHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgbGV0IGVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5fZWwpO1xuICAgIHRoaXMuX3JpcHBsZS5zdGFydCh7XG4gICAgICBldmVudCwgcmVjdDogZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9KTtcbiAgICBpZiAoZXZlbnQuZGV0YWlsID4gMSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXAoKSB7XG4gICAgdGhpcy5fcmlwcGxlLnN0b3AoKTtcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5fcmlwcGxlLnN0b3AoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXG4gICAgICA8UmlwcGxlIHJlZj17ZWwgPT4gdGhpcy5fcmlwcGxlID0gZWx9IGtleT0ncmlwcGxlJy8+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3EtZHJvcGRvd24taXRlbV9fY29udGVudCcga2V5PSdjb250ZW50Jz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICBdO1xuICAgIGxldCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKFt0aGlzLnByb3BzLmNsYXNzTmFtZSwgJ3EtZHJvcGRvd24taXRlbScsIHtcbiAgICAgICdxLWRyb3Bkb3duLWl0ZW1fbXVsdGlsaW5lJzogdGhpcy5wcm9wcy5tdWx0aWxpbmVcbiAgICB9XSk7XG4gICAgbGV0IHByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5fZWwgPSBlbCxcbiAgICAgIG9uQ2xpY2s6IDo6dGhpcy5oYW5kbGVDbGljayxcbiAgICAgIG9uTW91c2VEb3duOiA6OnRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgb25Nb3VzZVVwOiA6OnRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgIG9uTW91c2VMZWF2ZTogOjp0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG5cbiAgICB9O1xuICAgIGRlbGV0ZSBwcm9wc1snbXVsdGlsaW5lJ107XG4gICAgZGVsZXRlIHByb3BzWydjb250YWluZXInXTtcbiAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jb250YWluZXIsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25JdGVtOyJdfQ==
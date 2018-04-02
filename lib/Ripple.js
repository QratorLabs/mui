'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactTransitionGroup = require('react-transition-group');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ripple = function (_React$Component) {
  _inherits(Ripple, _React$Component);

  function Ripple() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ripple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      run: false,
      effects: []
    }, _this._pulseInterval = 200, _this._isMounted = true, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ripple, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'start',
    value: function start(_ref2) {
      var rect = _ref2.rect,
          event = _ref2.event,
          center = _ref2.center,
          pulsate = _ref2.pulsate,
          round = _ref2.round;

      var clientX = void 0,
          clientY = void 0;
      if (center) {
        clientX = rect.left + rect.width / 2;
        clientY = rect.top + rect.height / 2;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      var points = [[rect.left, rect.top], [rect.right, rect.top], [rect.right, rect.bottom], [rect.left, rect.bottom]];
      var distance = points.map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            x = _ref4[0],
            y = _ref4[1];

        return Math.sqrt(Math.pow(x - clientX, 2) + Math.pow(y - clientY, 2));
      });
      distance = distance.sort(function (a, b) {
        return a < b;
      })[0] * 2;
      if (pulsate) {
        distance *= .85;
      }
      if (round) {
        distance /= Math.sqrt(2);
      }
      var left = clientX - rect.left - distance / 2,
          top = clientY - rect.top - distance / 2;
      var effects = [].concat(_toConsumableArray(this.state.effects), [{
        left: left, top: top, distance: distance, id: _uuid2.default.v4(), startDt: Date.now(), pulsate: pulsate
      }]);
      this.setState({ effects: effects });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var _this2 = this;

      var effects = this.state.effects;

      // get expired UIDs
      var stopImmidiateUIDs = effects.filter(function (e) {
        return Date.now() - e.startDt >= _this2._pulseInterval;
      }).map(function (e) {
        return e.id;
      });

      // get effects to delete later
      var stopLaterEffects = effects.filter(function (e) {
        return stopImmidiateUIDs.indexOf(e.id) < 0;
      });
      if (this._isMounted) {
        this.setState({ effects: stopLaterEffects });
      };

      var _loop = function _loop(e) {
        var now = Date.now();
        setTimeout(function () {
          if (_this2._isMounted) {
            _this2.setState({ effects: _this2.state.effects.filter(function (eff) {
                return eff.id != e.id;
              }) });
          }
        }, now - e.startDt);
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = stopLaterEffects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var e = _step.value;

          _loop(e);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var baseCls = 'q-mui-ripple-effect';
      return React.createElement(
        _reactTransitionGroup.CSSTransitionGroup,
        {
          className: 'q-mui-ripple',
          transitionName: baseCls,
          transitionEnterTimeout: 400,
          transitionLeaveTimeout: 650 },
        this.state.effects.map(function (e) {
          var cls = (0, _classnames2.default)([baseCls, _defineProperty({}, baseCls + '_pulsate', e.pulsate)]);
          return React.createElement('div', {
            className: cls,
            key: e.id,
            style: {
              left: e.left,
              top: e.top,
              width: e.distance,
              height: e.distance } });
        })
      );
    }
  }]);

  return Ripple;
}(React.Component);

exports.default = Ripple;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SaXBwbGUuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmlwcGxlIiwic3RhdGUiLCJydW4iLCJlZmZlY3RzIiwiX3B1bHNlSW50ZXJ2YWwiLCJfaXNNb3VudGVkIiwicmVjdCIsImV2ZW50IiwiY2VudGVyIiwicHVsc2F0ZSIsInJvdW5kIiwiY2xpZW50WCIsImNsaWVudFkiLCJsZWZ0Iiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJwb2ludHMiLCJyaWdodCIsImJvdHRvbSIsImRpc3RhbmNlIiwibWFwIiwieCIsInkiLCJNYXRoIiwic3FydCIsInBvdyIsInNvcnQiLCJhIiwiYiIsImlkIiwidjQiLCJzdGFydER0IiwiRGF0ZSIsIm5vdyIsInNldFN0YXRlIiwic3RvcEltbWlkaWF0ZVVJRHMiLCJmaWx0ZXIiLCJlIiwic3RvcExhdGVyRWZmZWN0cyIsImluZGV4T2YiLCJzZXRUaW1lb3V0IiwiZWZmIiwiYmFzZUNscyIsImNscyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQyxNOzs7Ozs7Ozs7Ozs7OztzTEFDSkMsSyxHQUFRO0FBQ05DLFdBQUssS0FEQztBQUVOQyxlQUFTO0FBRkgsSyxRQUtSQyxjLEdBQWlCLEcsUUFDakJDLFUsR0FBYSxJOzs7OzsyQ0FFVTtBQUNyQixXQUFLQSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7OztpQ0FFNEM7QUFBQSxVQUF0Q0MsSUFBc0MsU0FBdENBLElBQXNDO0FBQUEsVUFBaENDLEtBQWdDLFNBQWhDQSxLQUFnQztBQUFBLFVBQXpCQyxNQUF5QixTQUF6QkEsTUFBeUI7QUFBQSxVQUFqQkMsT0FBaUIsU0FBakJBLE9BQWlCO0FBQUEsVUFBUkMsS0FBUSxTQUFSQSxLQUFROztBQUMzQyxVQUFJQyxnQkFBSjtBQUFBLFVBQWFDLGdCQUFiO0FBQ0EsVUFBSUosTUFBSixFQUFZO0FBQ1ZHLGtC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Q0Q7QUFDRixTQUpELEVBSUdJLE1BQU1JLEVBQUVOLE9BSlg7QUFmRzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFhTCw2QkFBY08sZ0JBQWQsOEhBQWdDO0FBQUEsY0FBdkJELENBQXVCOztBQUFBLGdCQUF2QkEsQ0FBdUI7QUFPL0I7QUFwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCTjs7OzZCQUNRO0FBQ1AsVUFBSUssVUFBVSxxQkFBZDtBQUNBLGFBQ0k7QUFBQTtBQUFBO0FBQ0kscUJBQVUsY0FEZDtBQUVJLDBCQUFnQkEsT0FGcEI7QUFHSSxrQ0FBd0IsR0FINUI7QUFJSSxrQ0FBd0IsR0FKNUI7QUFLRyxhQUFLMUMsS0FBTCxDQUFXRSxPQUFYLENBQW1Ca0IsR0FBbkIsQ0FBdUIsYUFBSztBQUMzQixjQUFJdUIsTUFBTSwwQkFBVyxDQUFDRCxPQUFELHNCQUFlQSxPQUFmLGVBQW1DTCxFQUFFN0IsT0FBckMsRUFBWCxDQUFWO0FBQ0EsaUJBQ0U7QUFDSSx1QkFBV21DLEdBRGY7QUFFSSxpQkFBS04sRUFBRVIsRUFGWDtBQUdJLG1CQUFPO0FBQ0xqQixvQkFBTXlCLEVBQUV6QixJQURIO0FBRUxFLG1CQUFLdUIsRUFBRXZCLEdBRkY7QUFHTEQscUJBQU93QixFQUFFbEIsUUFISjtBQUlMSixzQkFBUXNCLEVBQUVsQixRQUpMLEVBSFgsR0FERjtBQVVELFNBWkE7QUFMSCxPQURKO0FBcUJEOzs7O0VBekZrQnJCLE1BQU04QyxTOztrQkE0Rlo3QyxNIiwiZmlsZSI6IlJpcHBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcblxuY2xhc3MgUmlwcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcnVuOiBmYWxzZSxcbiAgICBlZmZlY3RzOiBbXVxuICB9XG5cbiAgX3B1bHNlSW50ZXJ2YWwgPSAyMDA7XG4gIF9pc01vdW50ZWQgPSB0cnVlO1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnQoe3JlY3QsIGV2ZW50LCBjZW50ZXIsIHB1bHNhdGUsIHJvdW5kfSkge1xuICAgIGxldCBjbGllbnRYLCBjbGllbnRZO1xuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgIGNsaWVudFggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgICAgIGNsaWVudFkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgKHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50KTtcbiAgICB9XG4gICAgbGV0IHBvaW50cyA9IFtcbiAgICAgIFtyZWN0LmxlZnQsIHJlY3QudG9wXSxcbiAgICAgIFtyZWN0LnJpZ2h0LCByZWN0LnRvcF0sXG4gICAgICBbcmVjdC5yaWdodCwgcmVjdC5ib3R0b21dLFxuICAgICAgW3JlY3QubGVmdCwgcmVjdC5ib3R0b21dLFxuICAgIF07XG4gICAgbGV0IGRpc3RhbmNlID0gcG9pbnRzLm1hcCgoW3gsIHldKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHggLSBjbGllbnRYLCAyKSArIE1hdGgucG93KHkgLSBjbGllbnRZLCAyKSk7XG4gICAgfSk7XG4gICAgZGlzdGFuY2UgPSBkaXN0YW5jZS5zb3J0KChhLCBiKSA9PiBhIDwgYilbMF0gKiAyO1xuICAgIGlmIChwdWxzYXRlKSB7XG4gICAgICBkaXN0YW5jZSAqPSAuODU7XG4gICAgfVxuICAgIGlmIChyb3VuZCkge1xuICAgICAgZGlzdGFuY2UgLz0gTWF0aC5zcXJ0KDIpO1xuICAgIH1cbiAgICBsZXQgbGVmdCA9IGNsaWVudFggLSByZWN0LmxlZnQgLSBkaXN0YW5jZSAvIDIsXG4gICAgICAgIHRvcCA9ICBjbGllbnRZIC0gcmVjdC50b3AgLSBkaXN0YW5jZSAvIDI7XG4gICAgbGV0IGVmZmVjdHMgPSBbLi4udGhpcy5zdGF0ZS5lZmZlY3RzLCB7XG4gICAgICBsZWZ0LCB0b3AsIGRpc3RhbmNlLCBpZDogdXVpZC52NCgpLCBzdGFydER0OiBEYXRlLm5vdygpLCBwdWxzYXRlXG4gICAgfV07XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWZmZWN0c30pO1xuICB9XG4gIHN0b3AoKSB7XG4gICAgbGV0IGVmZmVjdHMgPSB0aGlzLnN0YXRlLmVmZmVjdHM7XG5cbiAgICAvLyBnZXQgZXhwaXJlZCBVSURzXG4gICAgbGV0IHN0b3BJbW1pZGlhdGVVSURzID0gZWZmZWN0c1xuICAgICAgLmZpbHRlcihlID0+IERhdGUubm93KCkgLSBlLnN0YXJ0RHQgPj0gdGhpcy5fcHVsc2VJbnRlcnZhbClcbiAgICAgIC5tYXAoZSA9PiBlLmlkKTtcblxuICAgIC8vIGdldCBlZmZlY3RzIHRvIGRlbGV0ZSBsYXRlclxuICAgIGxldCBzdG9wTGF0ZXJFZmZlY3RzID0gZWZmZWN0cy5maWx0ZXIoZSA9PiBzdG9wSW1taWRpYXRlVUlEcy5pbmRleE9mKGUuaWQpIDwgMCk7XG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWZmZWN0czogc3RvcExhdGVyRWZmZWN0c30pO1xuICAgIH07XG4gICAgZm9yIChsZXQgZSBvZiBzdG9wTGF0ZXJFZmZlY3RzKSB7XG4gICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWZmZWN0czogdGhpcy5zdGF0ZS5lZmZlY3RzLmZpbHRlcihlZmYgPT4gZWZmLmlkICE9IGUuaWQpfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIG5vdyAtIGUuc3RhcnREdCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmFzZUNscyA9ICdxLW11aS1yaXBwbGUtZWZmZWN0JztcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgICBjbGFzc05hbWU9J3EtbXVpLXJpcHBsZSdcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXtiYXNlQ2xzfVxuICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17NDAwfVxuICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NjUwfT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lZmZlY3RzLm1hcChlID0+IHtcbiAgICAgICAgICAgIGxldCBjbHMgPSBjbGFzc25hbWVzKFtiYXNlQ2xzLCB7W2Ake2Jhc2VDbHN9X3B1bHNhdGVgXTogZS5wdWxzYXRlfV0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN9XG4gICAgICAgICAgICAgICAgICBrZXk9e2UuaWR9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBlLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZS50b3AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBlLmRpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGUuZGlzdGFuY2V9fS8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0NTU1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpcHBsZTsiXX0=
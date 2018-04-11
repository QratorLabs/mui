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
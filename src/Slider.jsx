import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';


class Slider extends React.Component {
  static defaultProps = {
    modifiers: '',
    min: 0,
    max: 100,
    value: 0
  }
  constructor(props) {
    super(props);
    this._active = false;
    this.handleWindowMove = ::this._handleWindowMove;
  }
  componentDidMount() {
    document.body.addEventListener('mousemove', this.handleWindowMove);
    this.setValue(this.props.value);
  }
  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.handleWindowMove);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value != nextProps.value && nextProps.hasOwnProperty('value')) {
      this.setValue(nextProps.value);
    } 
  }
  getValueByMousePosition({x, y}) {
    let sliderEl = ReactDOM.findDOMNode(this._sliderEl);
    let sliderRect = sliderEl.getBoundingClientRect();
    x = x - sliderRect.x;
    let width = sliderRect.width;
    let value = (x / width) * (this.props.max - this.props.min) + this.props.min;
    if (value < this.props.min) {
      value = this.props.min;
    }
    if (value > this.props.max) {
      value = this.props.max;
    }
    return Math.ceil(value);
  }
  _handleWindowMove(e) {
    if (e.buttons !== 1) {
      this._active = false;
    }
    if (!this._active) {
      return;
    }
    let value = this.getValueByMousePosition({x: e.screenX, y: screenY});
    this.setValue(value);
  }
  setValue(value) {
    let offset = value * 100 / (this.props.max - this.props.min);
    ReactDOM.findDOMNode(this._pointEl).style.left = `${offset}%`;
    ReactDOM.findDOMNode(this._activeLineEl).style.width = `${offset}%`;
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  handleMouseDown(e) {
    this._active = true;
  }
  handleAreaClick(e) {
    let value = this.getValueByMousePosition({x: e.screenX, y: screenY});
    this.setValue(value);
  }
  render() {
    let baseCls = 'q-mui-slider';
    let { modifiers, className } = this.props;
    modifiers = modifiers.split(/\s+/);
    let cls = classnames([
      baseCls, className,
      ...modifiers.map(m => `${baseCls}_${m}`)
    ]);
    return (
      <div className={cls} ref={el => this._sliderEl = el}>
        <div 
            className={`${baseCls}__click-area`}
            onClick={::this.handleAreaClick}></div>
        <div className={`${baseCls}__line`}></div>
        <div
            ref={el => this._activeLineEl = el}
            className={`${baseCls}__active-line`}></div>
        <div
            ref={el => this._pointEl = el}
            className={`${baseCls}__point`}
            onDragStart={e => e.preventDefault()}
            onMouseDown={::this.handleMouseDown}></div>
      </div>
    );
  }
}

export default Slider;

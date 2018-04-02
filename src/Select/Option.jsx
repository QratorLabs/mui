import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Ripple from '../Ripple';
import classnames from 'classnames';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.onDocumentMouseUp = ::this._onDocumentMouseUp;
  }
  _mouseDown = false;
  componentDidMount() {
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  }
  componentWillReceiveProps(nextProps) {
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
  _onDocumentMouseUp(e) {
    if (e.button !== 0) {
      return;
    }
    this.props.onClickOutside(e);
  }
  getRect() {
    return ReactDOM.findDOMNode(this._el).getBoundingClientRect();
  }
  handleMouseDown(event) {
    if (event.button !== 0) {
      return;
    }
    this._mouseDown = true;
    this.props.onMouseDown(event);
    let rect = this.getRect();
    this._ripple.start({rect, event});
  }
  handleMouseUp(event) {
    event.stopPropagation();
    if (event.button !== 0) {
      return;
    }
    this._mouseDown = false;
    this._ripple.stop();
    setTimeout(() => this.props.onMouseUp(event), 200);
  }
  render() {
    let baseCls = 'q-mui-option';
    let cls = classnames([baseCls, {
      [`${baseCls}_active`]: this.props.active,
      [`${baseCls}_divide-after`]: this.props.divideAfter,
      [`${baseCls}_divide-before`]: this.props.divideBefore
    }])
    return (
      <div 
          className={cls}
          onMouseDown={::this.handleMouseDown}
          onMouseUp={::this.handleMouseUp}
          ref={el => this._el = el}>
        <Ripple ref={el => this._ripple = el}/>
        <div className={`${baseCls}__container`}>
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default Option;

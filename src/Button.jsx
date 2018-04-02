import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Ripple from './Ripple';

class Button extends React.Component {

  static defaultProps = {
    modifiers: '',
    className: ''
  }

  state = {
    focus: false
  }
  getRect() {
    return ReactDOM.findDOMNode(this._el).getBoundingClientRect();
  }
  isRaised() {
    return this.props.modifiers.split(' ').indexOf('raised') > -1;
  }
  isIcon() {
    return this.props.modifiers.split(' ').indexOf('icon') > -1;
  }
  handleDown(event) {
    let rect = this.getRect();
    let center = this.isIcon();
    this._ripple.start({rect, event, center, round: center});
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  }
  handleUp(event) {
    this._ripple.stop();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  }
  focus() {
    setTimeout(_ => {
      this._showFocusRipple();
      this._el.focus();
      this.setState({focus: true});
    }, 200)
  }
  _showFocusRipple() {
    this._ripple.start({
      rect: this.getRect(),
      center: true,
      round: this.isIcon(),
      pulsate: this.isRaised() ? true : false
    });
  }
  handleFocus(event) {
    this._showFocusRipple();
    this.setState({focus: true});
  }
  handleBlur(event) {
    if (this._ripple) {
      this._ripple.stop();
    }
    this.setState({focus: false});
  }

  render() {
    let modifiers = [...this.props.modifiers.split(' '), this.state.focus ? 'focused' : false].filter(Boolean);
    let baseCls = 'q-mui-button';
    let classes = [
      baseCls, this.props.className,
      ...modifiers.map(m => `${baseCls}_${m}`)
    ].join(' ');
    let props = {...this.props};
    delete props['className'];
    delete props['modifiers'];
    props = {
      ...props,
      className: classes,
      onMouseDown: ::this.handleDown,
      onMouseUp: ::this.handleUp,
      onFocus: ::this.handleFocus,
      onBlur: ::this.handleBlur,
      ref: el => this._el = el
    };
    delete props['container'];
    let children = [
      <Ripple ref={el => this._ripple = el} key="ripple"/>,
      <span className={`${baseCls}__container`} key="content">
        {this.props.children}
      </span>
    ];
    let container = (
      <button {...props}>
        {children}
      </button>
    );
    if (this.props.container) {
      container = React.cloneElement(this.props.container, props, children);      
    }
    return container;
  }
}

export default Button;

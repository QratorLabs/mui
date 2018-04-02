import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Popover extends React.Component {

  isOpen = false;

  static defaultProps = {
    // hPos: ['center', 'center'],
    // vPos: ['bottom', 'top'],
  }

  componentWillUnmount() {
    this.close();
  }
  
  open(opts={}) {
    if (!this.isOpen) {
      this.el = document.createElement('div');
      this.el.className = 'q-mui-popover';
      this.el.style.position = 'fixed'
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
  calcPosition(targetEl) {
    let target = ReactDOM.findDOMNode(targetEl);
    let targetRect = target.getBoundingClientRect();
    let { top, left } = targetRect.top;
  }
  close() {
    document.body.removeChild(this.el);
    document.body.style.overflow = null;
    this.isOpen = false;
  }
  updatePosition() {

  }
  render() {
    return null;
  }
}

export default Popover;

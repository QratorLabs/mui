import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Ripple from '../Ripple'

class DropdownItem extends React.Component {
  static defaultProps = {
    className: ''
  }

  static contextTypes = {
    dropdownItemClick: PropTypes.func,
  }

  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e, this);
    }
    this.context.dropdownItemClick(e, this);
  }

  handleMouseDown(event) {
    let el = ReactDOM.findDOMNode(this._el);
    this._ripple.start({
      event, rect: el.getBoundingClientRect()
    });
    if (event.detail > 1) {
      event.preventDefault()
    }
  }

  handleMouseUp() {
    this._ripple.stop();
  }

  handleMouseLeave() {
    this._ripple.stop();
  }

  render() {
    let children = [
      <Ripple ref={el => this._ripple = el} key='ripple'/>,
      <div className='q-dropdown-item__content' key='content'>
        {this.props.children}
      </div>
    ];
    let className = classnames([this.props.className, 'q-dropdown-item', {
      'q-dropdown-item_multiline': this.props.multiline
    }]);
    let props = {
      ...this.props,
      className,
      ref: el => this._el = el,
      onClick: ::this.handleClick,
      onMouseDown: ::this.handleMouseDown,
      onMouseUp: ::this.handleMouseUp,
      onMouseLeave: ::this.handleMouseLeave,

    };
    delete props['multiline'];
    delete props['container'];
    if (this.props.container) {
      return React.cloneElement(this.props.container, props, children);
    }
    return (
      <div {...props}>
        {children}
      </div>
    );
  }
}

export default DropdownItem;
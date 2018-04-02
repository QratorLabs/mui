import * as React from 'react';
import classnames from 'classnames';
import Ripple from './Ripple';
import { CSSTransitionGroup } from 'react-transition-group';

class Checkbox extends React.Component {
  static defaultProps = {
    checkedIcon: null,
    uncheckedIcon: null,
  }
  state = {
    focus: false,
  }
  baseCls = 'q-mui-checkbox'
  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  handleFocus(e) {
    this.setState({focus: true});
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }
  handleBlur(e) {
    this.setState({focus: false});
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
  getIcon() {
    let icon, checked = this.props.value;
    if (checked) {
      icon = this.props.checkedIcon;
    } else {
      icon = this.props.uncheckedIcon || this.props.checkedIcon;
    }
    let content = null;
    let baseCls = `${this.baseCls}-icon`;
    if (icon) {
      let cls = classnames([baseCls, `${baseCls}_${checked ? 'check': 'uncheck'}`]);
      content = (
        <div className={cls} key={checked}>
          {icon}
        </div>
      );
    }
    return (
      <CSSTransitionGroup
          transitionName={baseCls}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}>
        {content}
      </CSSTransitionGroup>
    );
  }
  render() {
    let cls = classnames([this.baseCls, {
      [`${this.baseCls}_focus`]: this.state.focus,
      [`${this.baseCls}_checked`]: this.props.value,
      [`${this.baseCls}_disabled`]: this.props.disabled,
      [`${this.baseCls}_with-icon`]: this.props.checkedIcon || this.props.uncheckedIcon,
    }]);
    let props = { ...this.props },
        children = props.children;

    props.checked = props.value ? true : false;
    
    delete props['value'];
    delete props['children'];
    delete props['checkedIcon'];
    delete props['uncheckedIcon'];
    return (
      <div className={cls}>
        {this.getIcon()}
        {children}
        <input
            type='checkbox'
            {...props}
            onBlur={::this.handleBlur}
            onFocus={::this.handleFocus}
            onChange={::this.handleChange}/>
      </div>
    );
  }
}

export default Checkbox;

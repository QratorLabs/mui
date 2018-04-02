import * as React from 'react';
import classnames from 'classnames';

class Input extends React.Component {
  static defaultProps = {
    type: 'text',
    className: '',
    disabled: false,
    rightIcon: null
  }
  state = {
    focus: false,
    empty: true,
  }
  baseCls = 'q-mui-input'
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
  handleChange(e) {
    let val = e.target.value;
    this.setState({empty: val == ''});
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    let props = {...this.props};

    let empty = props.value === '' || props.value === undefined;
    let classes = classnames([
      this.baseCls,
      props.className, {
        [`${this.baseCls}_focus`]: this.state.focus && !this.props.disabled,
        [`${this.baseCls}_empty`]: empty,
        [`${this.baseCls}_error`]: props.hasError,
        [`${this.baseCls}_disabled`]: props.disabled,
        [`${this.baseCls}_has-right-icon`]: props.rightIcon,
      }
    ]);
    let label = props.label;
    delete props['label'];
    delete props['rightIcon'];
    delete props['hasError'];
    props.className = `${this.baseCls}__el`;
    return (
      <div className={classes}>
        <label className={`${this.baseCls}__label`}>{this.props.label}</label>
        <div className={`${this.baseCls}__wrapper-el`}>
          <input {...props}
              onChange={::this.handleChange}
              onBlur={::this.handleBlur} 
              onFocus={::this.handleFocus}/>
          <div className={`${this.baseCls}__right-icon`}>{this.props.rightIcon}</div>
        </div>
      </div>
    );
  }
}

export default Input;

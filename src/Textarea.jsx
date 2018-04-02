import * as React from 'react';
import classnames from 'classnames';

class Textarea extends React.Component {
  static defaultProps = {
    value: '',
    rows: 3,
    modifiers: '',
    disabled: false,
  }
  
  baseCls = 'q-mui-textarea';
  state = {
    focus: false,
  }
  handleBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
    this.setState({focus: false});
  }
  handleFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
    this.setState({focus: true});
  }
  handleChange(e) {
    let val = e.target.value;
    // this.setState({empty: val == ''});
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    let props = {...this.props};
    let empty = props.value === '' || props.value === undefined;
    let classes = classnames([
      this.baseCls,
      this.props.className, {
        [`${this.baseCls}_focus`]: this.state.focus && !props.disabled,
        [`${this.baseCls}_empty`]: empty,
        [`${this.baseCls}_error`]: props.hasError,
        [`${this.baseCls}_disabled`]: props.disabled,
      }
    ]);
    let label = props.label;
    delete props['label'];
    delete props['hasError'];
    props.className = `${this.baseCls}__el`;
    return (
      <div className={classes}>
        <label className={`${this.baseCls}__label`}>{label}</label>
        <div className={`${this.baseCls}__wrapper-el`}>
          <textarea 
              {...props}
              onFocus={::this.handleFocus}
              onBlur={::this.handleBlur}
              onChange={::this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default Textarea;

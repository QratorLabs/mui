import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

import Option from './Option';

class Select extends React.Component {
  static defaultProps = {
    options: [],
    optionsMaxHeight: null,
  }
  state = {
    label: null,
    focus: false,
    activeOptionIndex: null
  }
  componentWillMount() {
    if (this.props.value !== undefined) {
      let opt = this.props.options.find(o => o.value === this.props.value);
      if (opt) {
        this.setState({ label: opt.label, empty: false });
      }
    }
  }
  componentDidMount() {
    if (this.props.value !== undefined) {
      let label = null;
      let opt = this.props.options.find(
        o => o.value === this.props.value && o.value !== undefined
      );
      if (opt) {
        label = opt.label;
      } else {
        label = '';
      }
      this.setState({ label, empty: !Boolean(label) });
    }
  }
  componentWillReceiveProps(nextProps) {
    let label = null;
    if (nextProps.value !== undefined) {
      let opt = nextProps.options.find(o => o.value === nextProps.value && o.value !== undefined);
      if (opt) {
        label = opt.label;
      } else {
        label = '';
      }
    }
    this.setState({ label, empty: !Boolean(label) });
  }
  get value() {
    return this.props.value;
  }
  handleFocus(e) {
    this.setState({focus: true});
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleBlur(e) {
    if (!this._optionDown) {
      this.setState({focus: false, activeOptionIndex: undefined});
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }
  handleOptionMouseDown(e) {
    this._optionDown = true;
  }
  handleOptionMouseUp(i, e) {
    this._optionDown = false;
    this.setState({focus: false});
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
    this.handleChange(e, i);
  }

  handleKeyDown(e) {
    if (this.state.activeOptionIndex === undefined) {
      this.setState({activeOptionIndex: 0});
    } else {
      if (e.keyCode == 40) {
        if (this.state.activeOptionIndex < this.props.options.length - 1) {
          this.setState({activeOptionIndex: this.state.activeOptionIndex + 1});
        }
      } else if (e.keyCode == 38) {
        if (this.state.activeOptionIndex > 0) {
          this.setState({activeOptionIndex: this.state.activeOptionIndex - 1})
        }
      } else if (e.keyCode == 13) {
        e.preventDefault();
        this.handleChange(e, this.state.activeOptionIndex);
      }
    }
    if (e.keyCode !== 13 && e.keyCode !== 9) {
      e.preventDefault();
    }
  }
  handleClickOutsideOption(e) {
  }
  handleChange(e, index) {
    let opt = this.props.options[index];
    this.setState({value: opt.value, empty: false, focus: false, label: opt.label});
    if (this.props.onChange) {
      this.props.onChange(opt.value);
    }
    this.setState({activeOptionIndex: null});
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
  
  render() {
    let baseCls = 'q-mui-select';
    let { optionsMaxHeight, ...props } = this.props;
    let cls = classnames([
      baseCls,
      props.className, {
        [`${baseCls}_focus`]: this.state.focus && !props.disabled,
        [`${baseCls}_empty`]: props.value === undefined,
        [`${baseCls}_error`]: props.hasError,
        [`${baseCls}_disabled`]: props.disabled,
      }
    ]);
    props = {...props, value: props.value || ''};
    delete props['options'];
    return (
      <div className={cls}>
        <label className={`${baseCls}__label`}>{this.props.label}</label>
        <div className={`${baseCls}__wrapper-el`}>
          <input
              {...props}
              autoComplete='off'
              onFocus={::this.handleFocus}
              onBlur={::this.handleBlur}
              onKeyDown={::this.handleKeyDown}
              className={`${baseCls}__hidden-el`}/>
          <div className={`${baseCls}__el`}>
            {this.state.label}
          </div>
          <div
              style={{maxHeight: optionsMaxHeight}}
              className={`${baseCls}__options`}>
            {this.props.options.map((o, i) => (
            <Option 
                key={i}
                {...o}
                onMouseDown={::this.handleOptionMouseDown}
                active={this.state.activeOptionIndex == i}
                onClickOutside={::this.handleClickOutsideOption}
                onMouseUp={this.handleOptionMouseUp.bind(this, i)}/>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Select;

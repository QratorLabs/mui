import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleWindowClick = ::this._handleWindowClick;
  }

  static defaultProps = {
    className: "",
    closeOnSelect: false
  };

  getChildContext() {
    return {
      dropdownContentDidMount: ::this.handleContentMount,
      dropdownItemClick: ::this.handleItemClick,
      dropdownToggleDidMount: ::this.handleToggleMount,
      dropdownToggleClick: ::this.handleToggleClick,
    }
  }

  static childContextTypes = {
    dropdownContentDidMount: PropTypes.func.isRequired,
    dropdownItemClick: PropTypes.func,
    dropdownToggleDidMount: PropTypes.func.isRequired,
    dropdownToggleClick: PropTypes.func.isRequired,
  }

  handleContentMount(el) {
    this._content = el;
  }
  handleItemClick(e, el) {
    if (this.props.onItemSelect) {
      this.props.onItemSelect(e, el);
    }
    if (this.props.closeOnSelect) {
      this.close();
    }
  }
  handleToggleMount(el) {
    this._toggle = el;
  }
  handleToggleClick(e) {
    // e.stopPropagation();
    this._clicked = true;
    this.open();
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }
  _handleWindowClick(e) {
    if (this._clicked) {
      this._clicked = false;
      return;
    }
    this.close();
  }
  
  close() {
    this.setState({open: false});
    this._content.close()
  }
  open() {
    this.setState({open: true});
    this._content.open();
  }

  render() {
    let baseCls = 'q-dropdown'
    let cls = classnames([this.props.className, baseCls, {
      [`${baseCls}_open`]: this.state.open
    }])
    return (
      <div className={cls}>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;

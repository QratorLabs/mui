import * as React from 'react';
import * as PropTypes from 'prop-types';

class DropdownToggle extends React.Component {
  
  static contextTypes = {
    dropdownToggleDidMount: PropTypes.func.isRequired,
    dropdownToggleClick: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.context.dropdownToggleDidMount(this);
  }

  handleClick(e) {
    this.context.dropdownToggleClick(e);
  }

  render() {
    return (
      <div 
          className="q-dropdown-toggle"
          onClick={::this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

export default DropdownToggle;

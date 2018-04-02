import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';


class DropdownContent extends React.Component {

  state = {
    open: false
  }

  static defaultProps = {
    vPos: 'bottom',
    hPos: 'right',
    vPadding: 0,
    hPadding: 0,
  }

  static contextTypes = {
    dropdownContentDidMount: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.context.dropdownContentDidMount(this);
  }

  handleClick(e) {
    e.stopPropagation();
  }

  open() {
    this.setState({open: true});
  }
  close() {
    this.setState({open: false});
  }

  render() {
    let baseCls = 'q-dropdown-content';
    let classes = classnames([
      baseCls, `${baseCls}_${this.props.vPos}`, `${baseCls}_${this.props.hPos}`, this.props.className
    ]);
    let styles = {};
    if (this.props.vPos == 'bottom') {
      styles.bottom = -this.props.vPadding;
    }
    if (this.props.hPos == 'right') {
      styles.left = this.props.hPadding;
    } else {
      styles.right = this.props.hPadding;
    }
    if (this.props.hasOwnProperty('width')) {
      styles.width = `${this.props.width}px`;
    }
    let content = (
      <div 
          className={classes} 
          key='1'
          onClick={::this.handleClick}
          style={styles}>
        {this.props.children}
      </div>
    );
    if (!this.state.open) {
      content = null;
    }
    // return content;
    return (
      <div>
        <CSSTransitionGroup
            transitionName={baseCls}
            transitionEnterTimeout={450}
            transitionLeaveTimeout={450}>
          {content}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default DropdownContent;
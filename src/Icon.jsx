import * as React from 'react';
import classnames from 'classnames';

class Icon extends React.Component {
  
  static defaultProps = {
    className: '',
    type: 'material',
    style: {}
  }

  static typeToClass = {
    material: 'material-icons',
    flag: 'flag-icon'
  }

  render() {
    let classes = classnames([
      'q-mui-icon',
      this.props.className, 
      Icon.typeToClass[this.props.type]
    ]);
    return (
      <i {...this.props} className={classes}>{this.props.children}</i>
    );
  }
}

export default Icon;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import classnames from 'classnames';

class Tooltip extends React.Component {
  render() {
    let baseCls = 'q-mui-tooltip';
    let cls = classnames([baseCls, `${baseCls}_${this.props.position}`])
    return (
      <div className={cls}>
        <div className={`${baseCls}__arrow`}/>
        {this.props.content}
      </div>
    );
  }
}

class TooltipContainer extends React.Component {
  static defaultProps = {
    padding: 2,
    position: 'top',
  }
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.container = document.createElement('div');
    this.handleMouseEnter = ::this._handleMouseEnter;
    this.handleMouseLeave = ::this._handleMouseLeave;
  }
  arrowSize = 3;
  componentDidMount() {
    document.body.appendChild(this.container);
  }
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }
  _handleMouseEnter() {
    this._enterTimeout = setTimeout(() => {
      this.setState({show: true});
    }, this.props.enterDelay);
  }
  _handleMouseLeave() {
    clearTimeout(this._enterTimeout);
    this.setState({show: false});
  }
  handleChildMount(el) {
    if (el) {
      this._el = el;
      let domEl = ReactDOM.findDOMNode(el);
      domEl.addEventListener('mouseenter', this.handleMouseEnter);
      domEl.addEventListener('mouseleave', this.handleMouseLeave);
      window.addEventListener('scroll', this.handleMouseLeave);
    } else if (this._el) {
      let domEl = ReactDOM.findDOMNode(this._el);
      domEl.removeEventListener('mouseenter', this.handleMouseEnter);
      domEl.removeEventListener('mouseleave', this.handleMouseLeave);
      window.removeEventListener('scroll', this.handleMouseLeave);
    }
  }
  calcPosition(tooltip) {
    if (!tooltip || !this._el) {
      return;
    }
    let target = ReactDOM.findDOMNode(this._el);
    tooltip = ReactDOM.findDOMNode(tooltip);
    let targetRect = target.getBoundingClientRect(),
        tooltipRect = tooltip.getBoundingClientRect();
    let xDiff = (targetRect.width - tooltipRect.width) / 2,
        yDiff = (targetRect.height - tooltipRect.height) / 2;;
    let point = {
      left: targetRect.left + xDiff, 
      top: targetRect.top + yDiff
    };
    let offset = this.arrowSize + this.props.padding,
        xOffset = (tooltipRect.width + targetRect.width) / 2 + offset,
        yOffset = (tooltipRect.height + targetRect.height) / 2 + offset;
    switch (this.props.position) {
      case 'top':
        point.top -= yOffset;
        break;
      case 'bottom':
        point.top += yOffset;
        break;
      case 'left':
        point.left -= xOffset;
        break;
      case 'right':
        point.left += xOffset
        break;
    }
    tooltip.style.left = `${point.left}px`;
    tooltip.style.top = `${point.top}px`;
  }  
  getTooltip() {
    let tooltip = null;
    if (this.state.show) {
      tooltip = <Tooltip {...this.props} ref={::this.calcPosition}/>;
    }
    return (
      <CSSTransitionGroup
          transitionName='q-mui-tooltip'
          transitionEnterTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>
        {tooltip}
      </CSSTransitionGroup>
    )
  }
  render() {
    let baseCls = 'q-mui-tooltip-container';
    this.container.className = classnames([
      baseCls, {[`${baseCls}_show`]: this.state.show}
    ]);
    let portal = ReactDOM.createPortal(this.getTooltip(), this.container);

    let child = React.Children.only(this.props.children),
        props = {...child.props, key: 'children'};
    props.ref = ::this.handleChildMount;
    return [
      portal,
      React.cloneElement(child, props),
    ];
  }
}

export default TooltipContainer;

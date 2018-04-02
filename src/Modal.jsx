import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import classnames from 'classnames';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this._handleClick;
  }
  _handleClick(e) {
    this.props.onClick(e);
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this._el).addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    ReactDOM.findDOMNode(this._el).removeEventListener('click', this.handleContainerClick);
  }
  render() {
    let baseCls = 'q-mui-modal';
    let cls = classnames([baseCls, this.props.className]);
    return (
      <div ref={el => this._el = el} className={cls}>
        {this.props.children}
      </div>
    );
  }
}

class ModalContainer extends React.Component {
  static defaultProps = {
    closeOnClickOutside: true
  }
  state = {
    open: false
  }
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = 'q-mui-modal-container';
    this.handleContainerClick = ::this._handleContainerClick
  }
  componentDidMount() {
    document.body.appendChild(this.el);
    this.el.addEventListener('click', this.handleContainerClick);
  }
  componentWillUnmount() {
    this.el.removeEventListener('click', this.handleContainerClick);
    document.body.removeChild(this.el);
    document.body.style.overflow = null;
  }
  _handleContainerClick(e) {
    if (this._modalClicked) {
      this._modalClicked = false;
    } else if (this.props.closeOnClickOutside) {
      this.close();
    }
  }
  handleModalClick() {
    this._modalClicked = true;
  }
  getModal() {
    let modal = null;
    if (this.state.open) {
      modal = (
        <Modal
            {...this.props}
            key='modal'
            onClick={::this.handleModalClick}
            ref={el => this._modal = el}>
          {this.props.children}
        </Modal>
      );
    }
    return (
      <CSSTransitionGroup
          transitionName={'q-mui-modal'}
          transitionEnterTimeout={300}
          transitionLeave={false}>
        {modal}
      </CSSTransitionGroup>
    )
  }
  constrolBodyScroll() {
    if (this.state.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
    }
  }
  open() {
    return new Promise(resolve => {
      this.setState({open: true}, resolve);
    });
  }
  close() {
    this.setState({open: false});
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  render() {
    this.constrolBodyScroll();
    let baseCls = 'q-mui-modal-container';
    this.el.className = classnames([
      baseCls, {[`${baseCls}_open`]: this.state.open}
    ]);
    return ReactDOM.createPortal(
      this.getModal(),
      this.el,
    );
  }
}

export default ModalContainer;

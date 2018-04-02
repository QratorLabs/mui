import * as React from 'react';
import classnames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Ripple extends React.Component {
  state = {
    run: false,
    effects: []
  }

  _pulseInterval = 200;
  _isMounted = true;

  componentWillUnmount() {
    this._isMounted = false;
  }

  start({rect, event, center, pulsate, round}) {
    let clientX, clientY;
    if (center) {
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    } else {
      ({clientX, clientY} = event);
    }
    let points = [
      [rect.left, rect.top],
      [rect.right, rect.top],
      [rect.right, rect.bottom],
      [rect.left, rect.bottom],
    ];
    let distance = points.map(([x, y]) => {
      return Math.sqrt(Math.pow(x - clientX, 2) + Math.pow(y - clientY, 2));
    });
    distance = distance.sort((a, b) => a < b)[0] * 2;
    if (pulsate) {
      distance *= .85;
    }
    if (round) {
      distance /= Math.sqrt(2);
    }
    let left = clientX - rect.left - distance / 2,
        top =  clientY - rect.top - distance / 2;
    let effects = [...this.state.effects, {
      left, top, distance, id: uuid.v4(), startDt: Date.now(), pulsate
    }];
    this.setState({effects});
  }
  stop() {
    let effects = this.state.effects;

    // get expired UIDs
    let stopImmidiateUIDs = effects
      .filter(e => Date.now() - e.startDt >= this._pulseInterval)
      .map(e => e.id);

    // get effects to delete later
    let stopLaterEffects = effects.filter(e => stopImmidiateUIDs.indexOf(e.id) < 0);
    if (this._isMounted) {
      this.setState({effects: stopLaterEffects});
    };
    for (let e of stopLaterEffects) {
      let now = Date.now();
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({effects: this.state.effects.filter(eff => eff.id != e.id)});
        }
      }, now - e.startDt);
    }
  }
  render() {
    let baseCls = 'q-mui-ripple-effect';
    return (
        <CSSTransitionGroup
            className='q-mui-ripple'
            transitionName={baseCls}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={650}>
          {this.state.effects.map(e => {
            let cls = classnames([baseCls, {[`${baseCls}_pulsate`]: e.pulsate}]);
            return (
              <div
                  className={cls}
                  key={e.id}
                  style={{
                    left: e.left,
                    top: e.top,
                    width: e.distance,
                    height: e.distance}}/>
            );
          })}
        </CSSTransitionGroup>
    );
  }
}

export default Ripple;
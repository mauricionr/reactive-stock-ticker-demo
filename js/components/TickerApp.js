import React from 'react';
import Ticker from './ticker.jsx';
import MutationReporter from './mutations.jsx';
import styles from '../../css/styles.css';
import * as Actions from '../actions/TickerActions';

import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';


export default React.createClass({
  render() {
    return (
      <Connector select={state => ({ ...state.Ticker })}>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild({ transactions, recording, dispatch }) {
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <MutationReporter recording={recording}>
        <Ticker transactions={transactions} recording={recording} onStart={actions.startTicker.bind(null, actions.receiveData)}
          onStop={actions.stopTicker} onReset={actions.reset} />
      </MutationReporter>
    );
  }
});

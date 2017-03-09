import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/app';
import reducers from '../reducers';

export default class Index extends React.Component {
  static getInitialProps() {
    return { state: createStore(reducers).getState() };
  }

  constructor(props) {
    super(props);
    this.state = { store: createStore(reducers, props.state) };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

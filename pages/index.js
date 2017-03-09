import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from '../components/App';
import reducers from '../reducers';

export default class Index extends React.Component {
  static getInitialProps() {
    return { state: createStore(reducers, null, applyMiddleware(thunk)).getState() };
  }

  constructor(props) {
    super(props);
    this.state = { store: createStore(reducers, props.state, applyMiddleware(thunk)) };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

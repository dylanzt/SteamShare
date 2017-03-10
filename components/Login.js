import React from 'react';
import { connect } from 'react-redux';
import { getUserAndFriends } from '../actions/user';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    this.props.getUserAndFriends(this.steamIdInput.value);
  }

  render() {
    return (
      <div>
        <input ref={(el) => this.steamIdInput = el} type="text"/>
        <button onClick={this.login}>OK!</button>
      </div>
    );
  }
}

export default connect(null, { getUserAndFriends })(Login);

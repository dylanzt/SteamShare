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
      <div className="wrapper">
        <div className="main">
          <div className="text">Please Enter Your Steam ID</div>
          <input className="input" ref={(el) => this.steamIdInput = el} type="text"/>
          <button className="button" onClick={this.login}>OK!</button>
        </div>
        <style jsx>{`
          .wrapper {
            display: flex;
            justify-content: center;
            flex-direction: row;
            text-align: center;
            height: 1000px;
            width: 100%;
          }

          .main {
            flex-basis: 50%;
            display: flex;
            justify-content: center;
            padding-top: 20%;
            flex-direction: column;
            text-align: center;
            height: 100px;
          }

          .text {
            flex-basis: 100%;
            margin-bottom: 10px;
            font-family: Roboto Arial sans-serif;
            font-size: 40px;
          }

          .input {
            flex-basis: 20%;
            margin-bottom: 10px;
            font-family: Roboto Arial sans-serif;
            font-size: 30px;
            text-align: center;
            color: #444;
          }

          .button {
            flex-basis: 20%;
            display: inline-block;
            position: relative;
            min-width: 125px;
            padding: 20px 40px;
            font-size: 14px;
            font-weight: 600;
            line-height: 0;
            border: 2px solid transparent;
            border-radius: 100px;
            transition: all 250ms ease-in-out;
            background-color: #BBB;
          }

          .button:hover {
            background-color: #DDD;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(null, { getUserAndFriends })(Login);

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
            background: linear-gradient(to bottom, #4c4c4c 0%,#595959 12%,#666666 25%,#474747 39%,#2b2b2b 76%,#1c1c1c 91%,#2c2c2c 96%,#111111 97%,#000000 99%,#2c2c2c 100%,#131313 100%);
            height: 1000px;
            width: 100%;
          }

          .main {
            flex-basis: 50%;
            display: flex;
            'justify-content: center;
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
            color: #DDD;
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
            padding: 13.25px 40px;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.25;
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

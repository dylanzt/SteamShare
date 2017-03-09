import React from 'react';
import 'isomorphic-fetch';

export default class extends React.Component {
  static getInitialProps () {
    return fetch('http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=FDF267D8BAEE833D4569D2433FB4AD4F&steamid=76561197960435530&relationship=friend')
    .then((res) => {
        return res.json();
    }).then((data) => {
        return { friends: data.friendslist };
    });
  }

  render() {
    return (
        <div>
            {JSON.stringify(this.props.friends)}
        </div>
    );
  }
}
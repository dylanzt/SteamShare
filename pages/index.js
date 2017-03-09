import React from 'react';
import getUserInfo from '../lib/userInfo';
import { getFriendInfo, getUserGames, getSharedGames, getGameInfo } from '../lib/userInfo';

export default class extends React.Component {
  static async getInitialProps () {
    //   return getUserInfo('76561197964790875').then((players) => ({ players }));
      return getFriendInfo('76561197964790875').then((players) => ({ players }));
    // return getUserGames('76561197964790875').then((players) => ({ players }));
    //   return getAllUsersGames(['76561197964790875','76561198105819920']).then((players) => ({ players }));
    //   return getGameInfo('292030').then((players) => ({ players }));
  }

  render() {
    return (
        <div>
            {JSON.stringify(this.props.players) }
        </div>
    );
  }
}
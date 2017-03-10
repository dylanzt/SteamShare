import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getGamesList } from '../actions/user';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFriends: {},
    };

    this.findCommonFriends = this.findCommonFriends.bind(this);
    this.selectOrUnselectFriend = this.selectOrUnselectFriend.bind(this);
  }

  findCommonFriends() {
    const { games } = this.props;
    let selectedFriends = [];
    Object.keys(this.state.selectedFriends).forEach((friend) => {
      if (this.state.selectedFriends[friend]) {
        selectedFriends.push(friend);
      }
    });

    const gamesOwnedByFriends = {};

    games.forEach(({ gameIds, steamId }) => {
      gamesOwnedByFriends[steamId] = gameIds;
    });

    const gamesOwnedBySelectedFriends = selectedFriends.map((friend) => {
      return gamesOwnedByFriends[friend];
    });

    this.props.getGamesList(_.intersection(...gamesOwnedBySelectedFriends));
  }

  selectOrUnselectFriend(steamId) {
    if (this.state.selectedFriends[steamId]) {
      this.setState({
        selectedFriends: {
          ...this.state.selectedFriends,
          [steamId]: false,
        }
      });
    } else {
      this.setState({
        selectedFriends: {
          ...this.state.selectedFriends,
          [steamId]: true,
        }
      })
    }

  }

  render() {
    const { user, friends, games } = this.props;

    return (
      <div>
        <div className="user name-avatar name-avatar-big">
          <div className="user-inner">
            <img src={user.avatar}/>
            <h1>{user.name}</h1>
          </div>
          <button disabled={!games.length} onClick={this.findCommonFriends} className="find-games-button">Find games we can play!</button>
        </div>
        <div className="friends">
          {friends.map((friend) => (
            <li
              onClick={() => this.selectOrUnselectFriend(friend.steamId)}
              className={`name-avatar name-avatar-medium${this.state.selectedFriends[friend.steamId] ? ' selected' : ''}`}
            >
              <img src={friend.avatar}/>
              <h2>{friend.name}</h2>
            </li>
          ))}
        </div>

        <style jsx>{`
          .friends {
            margin-top: 275px;
          }

          .name-avatar {
            display: flex;
            border: 1px dotted grey;
            padding: 16px;
            margin-bottom: 16px;
            background-color: #BBB;
            border-radius: 8px;
            transition: all 250ms ease-in-out;
          }

          .name-avatar-medium:hover {
            background-color: #DDD;
          }

          .selected {
            background-color: #ddf8e1;
          }

          .selected:hover {
            background-color: #ecfaef;
          }

          .name-avatar img {
            margin-right: 16px;
            border: 3px solid black;
          }

          .name-avatar-medium {
            padding: 16px 16px 0px 16px;
          }

          .name-avatar-medium h2 {
            margin-top: 8px;
          }

          .name-avatar-medium img {
            height: 40px;
          }

          .name-avatar-big {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            width: 100%;
            background: linear-gradient(darkgrey, grey);;
          }

          .user-inner {
            display: flex;
          }

          .find-games-button {
            align-self: center;
            background-color: lightgrey;
            font-size: 14px;
            border-radius: 3px;
            border: 1px solid grey;
            padding: 8px;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(({ user, friends, games }) => ({
  user,
  friends,
  games,
}), { getGamesList })(FriendsList);

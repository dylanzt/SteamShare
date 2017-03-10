import React from 'react';
import { connect } from 'react-redux';
// import { } from '../actions/user';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFriends: {},
    };

    this.selectOrUnselectFriend = this.selectOrUnselectFriend.bind(this);
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
    const { user, friends } = this.props;

    return (
      <div>
        <div className="user name-avatar name-avatar-big">
          <img src={user.avatar}/>
          <h1>{user.name}</h1>
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
            margin-top: 234px;
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
            position: fixed;
            top: 0;
            width: 100%;
            background-color: lightgreen;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(({ user, friends }) => ({
  user,
  friends,
}))(FriendsList);

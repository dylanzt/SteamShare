import React from 'react';
import { connect } from 'react-redux';
// import { } from '../actions/user';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
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
            <li className="name-avatar name-avatar-medium">
              <img src={friend.avatar}/>
              <h2>{friend.name}</h2>
            </li>
          ))}
        </div>

        <style jsx>{`
          .name-avatar-big {
            background-color: lightgreen;
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
          
          .name-avatar:hover {
            background-color: #DDD;
          }

          .name-avatar img {
            margin-right: 16px;
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

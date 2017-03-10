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
        <div className="user">
          <img src={user.avatar}/>
          <h1>{user.name}</h1>
        </div>
        <div className="friends">
          {friends.map((friend) => (
            <li>
              <img src={friend.avatar}/>
              <h2>{friend.name}</h2>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(({ user, friends }) => ({
  user,
  friends,
}))(FriendsList);

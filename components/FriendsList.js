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
      </div>
    );
  }
}

export default connect(({ user, friends }) => ({
  user,
  friends,
}))(FriendsList);

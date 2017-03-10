import { connect } from 'react-redux';
import Login from '../components/Login';
import FriendsList from '../components/FriendsList';

const mapStateToProps = ({ workflow }) => {
  return { component: workflow.component };
}

const App = ({ component }) => {
  switch (component) {
    case 'friendsList':
      return <FriendsList />;
    default:
      return <Login />;
  }
};

export default connect(mapStateToProps)(App);

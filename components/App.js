import { connect } from 'react-redux';
import Login from '../components/Login';
import FriendsList from '../components/FriendsList';
import CommonGames from '../components/CommonGames';

const mapStateToProps = ({ workflow }) => {
  return { component: workflow.component };
}

const App = ({ component }) => {
  switch (component) {
    case 'friendsList':
      return <FriendsList />;
    case 'commonGames':
      return <CommonGames />;
    default:
      return <Login />;
  }
};

export default connect(mapStateToProps)(App);

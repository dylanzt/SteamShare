import { connect } from 'react-redux';
import Login from '../components/Login';

const mapStateToProps = ({ workflow }) => {
  return { component: workflow.component };
}

const App = ({ component }) => {
  switch (component) {
    default:
      return <Login />;
  }
};

export default connect(mapStateToProps)(App);

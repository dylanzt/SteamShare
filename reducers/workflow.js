import { GET_USER_AND_FRIENDS_SUCCESS } from '../actions/user';

const defaultState = {
  component: 'login',
};

const workflow = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_USER_AND_FRIENDS_SUCCESS:
      return { component: 'friendsList' };
    default:
      return state;
  }
}

export default workflow;

import { GET_USER_INFO_SUCCESS } from '../actions/user';

const defaultState = {};

const user = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        ...user,
      };
    default:
      return state;
  }
}

export default user;

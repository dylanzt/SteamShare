import { GET_USER_AND_FRIENDS_SUCCESS } from '../actions/user';

const defaultState = [];

const friends = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_USER_AND_FRIENDS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default friends;

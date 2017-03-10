import { GET_FRIENDS_INFO_SUCCESS } from '../actions/user';

const defaultState = [];

const friends = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_FRIENDS_INFO_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default friends;

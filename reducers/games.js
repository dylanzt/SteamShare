import { GET_GAMES_INFO_SUCCESS } from '../actions/user';

const defaultState = [];

const games = (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_GAMES_INFO_SUCCESS:
      return [
        ...state,
        ...action.data,
      ];
    default:
      return state;
  }
}

export default games;

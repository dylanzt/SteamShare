import { combineReducers } from 'redux';
import user from './user';
import friends from './friends';
import games from './games';
import workflow from './workflow';

const reducers = combineReducers({
  user,
  friends,
  games,
  workflow,
});

export default reducers;

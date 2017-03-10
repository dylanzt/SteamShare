import { getUserInfo, getAllFriendsInfo } from '../lib/steamAPIClient';

export const GET_USER_AND_FRIENDS_SUCCESS = 'GET_USER_AND_FRIENDS_SUCCESS';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_FRIENDS_INFO_SUCCESS = 'GET_FRIENDS_INFO_SUCCESS';


export function getUserAndFriends(steamId) {
  return (dispatch) => {
    const userPromise = getUserInfo(steamId).then(([user]) => dispatch({
      type: GET_USER_INFO_SUCCESS,
      data: user,
    }))

    const friendsPromise = getAllFriendsInfo(steamId).then(friends => dispatch({
      type: GET_FRIENDS_INFO_SUCCESS,
      data: friends,
    }))

    Promise.all([userPromise, friendsPromise])
    .then(([user, friends]) => dispatch({
      type: GET_USER_AND_FRIENDS_SUCCESS,
    }));
  };
}

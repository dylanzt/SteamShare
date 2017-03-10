import { getUserInfo, getAllFriendsInfo } from '../lib/steamAPIClient';

export const GET_USER_AND_FRIENDS_REQUEST = 'GET_USER_AND_FRIENDS_REQUEST';
export const GET_USER_AND_FRIENDS_SUCCESS = 'GET_USER_AND_FRIENDS_SUCCESS';
export const GET_USER_AND_FRIENDS_FAIL = 'GET_USER_AND_FRIENDS_FAIL';

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';

export function getUserAndFriends(steamId) {
  return (dispatch) => {
    getUserInfo(steamId)
      .then(([user]) => {
        dispatch({
          type: GET_USER_INFO_SUCCESS,
          data: user,
        })
      })
  };
}

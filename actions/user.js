import { getUserInfo, getAllFriendsInfo } from '../lib/userInfo';

export const GET_USER_AND_FRIENDS_REQUEST = 'GET_USER_AND_FRIENDS_REQUEST';
export const GET_USER_AND_FRIENDS_SUCCESS = 'GET_USER_AND_FRIENDS_SUCCESS';
export const GET_USER_AND_FRIENDS_FAIL = 'GET_USER_AND_FRIENDS_FAIL';

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';

export function getUserAndFriends(steamId) {
  console.log(steamId);
}

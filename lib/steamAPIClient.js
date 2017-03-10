export function getUserInfo(steamIds) {
  return fetch(`/fetchFromSteamApi?method=getUserInfo&argument=${steamIds.toString()}`)
    .then((res) => res.json());
}

export function getAllFriendsInfo(steamId) {
  return fetch(`/fetchFromSteamApi?method=getAllFriendsInfo&argument=${steamId}`)
    .then((res) => res.json());
}

export function getUserGames(steamId) {
  return fetch(`/fetchFromSteamApi?method=getUserGames&argument=${steamId}`)
    .then((res) => res.json());
}

export function getAllUsersGames(steamIds) {
  return fetch(`/fetchFromSteamApi?method=getAllUsersGames&argument=${steamIds.toString()}`)
    .then((res) => res.json());
}

export function getGameInfo(gameId) {
  return fetch(`/fetchFromSteamApi?method=getGameInfo&argument=${gameId}`)
    .then((res) => res.json());
}

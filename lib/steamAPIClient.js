export function getUserInfo(steamIds) {
  return fetch(`/fetchFromSteamApi?method=getUserInfo&argument=${steamIds.toString()}`)
    .then((res) => res.json());
}

export function getAllFriendsInfo(steamId) {
}

export function getUserGames(steamId) {
}

export function getAllUsersGames(steamIds) {
}

export function getGameInfo(gameId) {
}

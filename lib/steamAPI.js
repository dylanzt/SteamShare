function getUserInfo(steamIds) {
    // for each steamId in array
    // get steamId, personaname and avatarfull from User Info
    const url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=FDF267D8BAEE833D4569D2433FB4AD4F&steamIds=' + steamIds.toString();
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return data.response.players.map((player) => ({
            steamId: player.steamid,
            name: player.personaname,
            avatar: player.avatarfull
        }))
    });
}

function getAllFriendsInfo(steamId) {
    // for steamId
    // for each friend Id
    // get friend personaname and avatarfull
    const url = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=FDF267D8BAEE833D4569D2433FB4AD4F&relationship=friend&steamId=' + steamId
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let steamIds = [];
        data.friendslist.friends.forEach((friend) => steamIds.push(friend.steamId));
        return getUserInfo(steamIds)
    });
}

function getUserGames(steamId) {
    // for steamId
    // for each game in games
    // get appid
    const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=FDF267D8BAEE833D4569D2433FB4AD4F&steamId=' + steamId;
    return fetch(url)
    .then((res) => res.json())
    .then((data) => ({
        steamId,
        gameIds: data.response.games.map((game) => game.appid),
    }));
}

function getAllUsersGames(steamIds) {
    // for each steamId
    // get user games
    const gameArray = steamIds.map((steamId) => getUserGames(steamId));
    return Promise.all(gameArray);
}

function getGameInfo(gameId) {
    // for gameId
    // get game name and header_image
    // NOTE: Misleading API naming, will only accept a single appid
    const url = 'http://store.steampowered.com/api/appdetails?appids=' + gameId;
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return ({
            gameName: data[gameId].data.name,
            gameImage: data[gameId].data.header_image
        })
    });
}

module.exports = {
  getUserInfo,
  getAllFriendsInfo,
  getUserGames,
  getAllUsersGames,
  getGameInfo,
};

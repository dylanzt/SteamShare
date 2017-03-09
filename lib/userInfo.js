
import 'isomorphic-fetch';

export default function getUserInfo(steamIDs) {
    // for each steamID in array
    // get steamid, personaname and avatarfull from User Info
    const url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=FDF267D8BAEE833D4569D2433FB4AD4F&steamids=' + steamIDs.toString();
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return data.response.players.map((player) => ({
            steamID: player.steamid,
            name: player.personaname,
            avatar: player.avatarfull
        }))
    });
}

export function getFriendInfo(steamID) {
    // for steamID
    // for each friend ID
    // get friend personaname and avatarfull
    const url = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=FDF267D8BAEE833D4569D2433FB4AD4F&relationship=friend&steamid=' + steamID
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let steamIDs = [];
        data.friendslist.friends.forEach((friend) => steamIDs.push(friend.steamid));
        return getUserInfo(steamIDs)
    });
}

export function getUserGames(steamID) {
    // for steamID
    // for each game in games
    // get appid
    const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=FDF267D8BAEE833D4569D2433FB4AD4F&steamid=' + steamID;
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return data.response.games.map((game) => ({
            gameID: game.appid,
        }))
    });
}

export function getSharedGames(steamIDs) {
    // for each steamID
    // get user games
    // TODO: Get this working
        let gameArray = [];
        steamIDs.forEach((steamID) => gameArray.push("yo"));
        return ({
            games: gameArray
        })
}

export function getGameInfo(gameID) {
    // for gameID
    // get game name and header_image
    // NOTE: Misleading API naming, will only accept a single appid
    const url = 'http://store.steampowered.com/api/appdetails?appids=' + gameID;
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return ({
            gameName: data[gameID].data.name,
            gameImage: data[gameID].data.header_image
        })
    });
} 
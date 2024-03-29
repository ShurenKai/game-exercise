import playerData from "../data/playerData"
import matchData from "../data/matchData"

export const preparePlayerData = (playerData) => {
  return Object.values(playerData)
}

export const addWinsToPlayers = () => {
  const playerDataArray = Object.keys(playerData)
  const player = playerDataArray[1]
  return playerDataArray.map(player => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player
  });
}

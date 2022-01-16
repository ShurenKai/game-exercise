import React from "react";
import Player from "./Player";
import { addWinsToPlayers, preparePlayerData } from "../helpers/playerHelpers";
import playerData from "../data/playerData";


function PlayerList(props) {
  const parsedPlayersList = playerData.map(player => <Player {...player} />)

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      { parsedPlayersList }
    </section>
  );
}

export default PlayerList;
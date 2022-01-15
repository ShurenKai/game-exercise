import React from "react";
import Match from "./Match";
import playerData from "../data/playerData";
import matchData from '../data/matchData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

function MatchList(props){
  return(
    <section className="PlayerList MatchList">
      <h1>Current Match list</h1>
      <Match players={oneMatch, players} winner={oneMatch, winner} scoreDifference={oneMatch, scoreDifference} />
    </section>
  )
}

export default MatchList;
import React from "react";
import matchData from "../data/matchData";

function Match(props){
  const {players, winner, scoreDifference} = props.matchData;
  return(
    <article className="Match">
        <h1>
          {players[0]} <span>vs</span> {players[1]}
        </h1>
        {winner && <h2>{winner} is the winner by {scoreDifference}!</h2>}
        {/* To be shown when there is no winner */}
        {!winner && <h2>No winners yet!</h2>}
    </article>
  )
}

export default Match;

//players={oneMatch, players} winner={oneMatch, winner} scoreDifference={oneMatch, scoreDifference} 
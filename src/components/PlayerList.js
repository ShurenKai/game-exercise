import React from "react";
import Player from "./Player";
import playerData from "../data/playerData";

function PlayerList(props){
  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  )
}

export default PlayerList;
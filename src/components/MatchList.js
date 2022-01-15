import React from "react";
import Match from "./Match";
import playerData from "../data/playerData";

function MatchList(props){
  return(
    <section className="MatchList">
      <h1>Current Match list</h1>
      <Match />
    </section>
  )
}

export default MatchList;
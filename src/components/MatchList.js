import React from "react";
import Match from "./Match";
import matchData from "../data/matchData";


function MatchList(props) {
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber}  {...match} />);

  return({parsedMatches});
}

export default MatchList;
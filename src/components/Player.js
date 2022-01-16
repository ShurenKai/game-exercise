import React from 'react';
import playerData from '../data/playerData';

function Player(props){
  const { gamerTag, firstName, lastName, wins } = props.playerData
  return(
    <article className="Player">
      <h1>{firstName} <span>{gamerTag}</span>{lastName}</h1>
      {wins === 0 && <h2 className="zero">Currently with no wins</h2>}
      {wins === 1 && <h2>Currently at 1 win</h2>}
      {wins > 1 && <h2>Currently at 1+ wins</h2>}
  </article>
  )
}

export default Player;
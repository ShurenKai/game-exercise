  <article className="Player">
    <h1>John <span>Secret</span> Doe</h1>
    {/* To be shown when there are no wins */}<h2 className="zero">Currently with no wins</h2>
    {/* To be shown when there is 1 win */}<h2>Currently at 1 win</h2>
    {/* To be shown when there is more than one win */}<h2>Currently at 1+ wins</h2>
  </article>

  <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
  </section>

  <article className="Match">
    <h1>Joe <span>vs</span> Bob</h1>
    {/* To be shown when there is a winner */}<h2>Joe is the winner by 1!</h2>
    {/* To be shown when there is no winner */}<h2>No winners yet!</h2>
  </article>
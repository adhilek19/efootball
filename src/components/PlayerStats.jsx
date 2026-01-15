function PlayerStats({ players, setName }) {
  return (
    <>
      {players.map((p) => (
        <div className="card mb-3" key={p.id}>
          <div className="card-body">
            <input
              className="form-control mb-2"
              value={p.name}
              placeholder="Player Name"
              onChange={(e) => setName(p.id, e.target.value)}
            />

            <div className="row text-center">
              <div className="col">Matches<br /><strong>{p.matches}</strong></div>
              <div className="col">Wins<br /><strong>{p.wins}</strong></div>
              <div className="col">Losses<br /><strong>{p.losses}</strong></div>
              <div className="col">Draws<br /><strong>{p.draws}</strong></div>
              <div className="col">Goals<br /><strong>{p.goals}</strong></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PlayerStats;

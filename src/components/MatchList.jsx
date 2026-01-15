function MatchList({ matches, players }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5>Match History</h5>

        {matches.length === 0 && (
          <p className="text-muted">No matches played</p>
        )}

        <ul className="list-group list-group-flush">
          {matches.map((m) => (
            <li
              key={m.id}
              className="list-group-item d-flex justify-content-between"
            >
              <span>
                {players[0]?.name} {m.g1} - {m.g2} {players[1]?.name}
              </span>
              <span className="badge bg-primary">{m.result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MatchList;

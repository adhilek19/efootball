import { useState } from "react";

function MatchForm({ addMatch }) {
  const [g1, setG1] = useState("");
  const [g2, setG2] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (g1 === "" || g2 === "") return;
    addMatch(+g1, +g2);
    setG1("");
    setG2("");
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>Add Match</h5>
        <form onSubmit={submit}>
          <input
            className="form-control mb-2"
            type="number"
            placeholder="Player 1 Goals"
            value={g1}
            onChange={(e) => setG1(e.target.value)}
          />
          <input
            className="form-control mb-2"
            type="number"
            placeholder="Player 2 Goals"
            value={g2}
            onChange={(e) => setG2(e.target.value)}
          />
          <button className="btn btn-success w-100">
            Save Match
          </button>
        </form>
      </div>
    </div>
  );
}

export default MatchForm;

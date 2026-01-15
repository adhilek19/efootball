import { useEffect, useState } from "react";
import PlayerStats from "./components/PlayerStats";
import MatchForm from "./components/MatchForm";
import MatchList from "./components/MatchList";
import {
  getPlayers,
  getMatches,
  updatePlayer,
  addMatchApi
} from "./api/Api";

function App() {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getPlayers().then(setPlayers);
    getMatches().then(setMatches);
  }, []);

  const setName = async (id, name) => {
    const updated = players.map(p =>
      p.id === id ? { ...p, name } : p
    );
    setPlayers(updated);
    await updatePlayer(updated.find(p => p.id === id));
  };

  const addMatch = async (g1, g2) => {
    const p1 = { ...players[0] };
    const p2 = { ...players[1] };

    p1.matches++;
    p2.matches++;

    p1.goals += g1;
    p2.goals += g2;

    let result = "Draw";

    if (g1 > g2) {
      p1.wins++;
      p2.losses++;
      result = `${p1.name} Won`;
    } else if (g2 > g1) {
      p2.wins++;
      p1.losses++;
      result = `${p2.name} Won`;
    } else {
      p1.draws++;
      p2.draws++;
    }

    await updatePlayer(p1);
    await updatePlayer(p2);

    const savedMatch = await addMatchApi({
      g1,
      g2,
      date: new Date().toLocaleDateString(),
      result
    });

    setPlayers([p1, p2]);
    setMatches([...matches, savedMatch]);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">⚽ eFootball Match Tracker</h2>

      <div className="row g-3">
        <div className="col-md-6">
          <PlayerStats players={players} setName={setName} />
        </div>

        <div className="col-md-6">
          <MatchForm addMatch={addMatch} />
          <MatchList matches={matches} players={players} />
        </div>
      </div>
    </div>
  );
}

export default App;

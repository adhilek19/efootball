const BASE_URL = "http://localhost:5000";

export const getPlayers = async () => {
  const res = await fetch(`${BASE_URL}/players`);
  return res.json();
};

export const updatePlayer = async (player) => {
  await fetch(`${BASE_URL}/players/${player.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(player)
  });
};

export const getMatches = async () => {
  const res = await fetch(`${BASE_URL}/matches`);
  return res.json();
};

export const addMatchApi = async (match) => {
  const res = await fetch(`${BASE_URL}/matches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(match)
  });
  return res.json();
};

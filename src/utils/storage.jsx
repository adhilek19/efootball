export const loadData = () => {
  const data = localStorage.getItem("efootball-data");
  return data ? JSON.parse(data) : null;
};

export const saveData = (data) => {
  localStorage.setItem("efootball-data", JSON.stringify(data));
};

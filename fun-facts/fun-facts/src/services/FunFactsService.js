const url = "http://localhost:3030/data/facts";

export const getAll = () => {
  return fetch(url).then((res) => res.json());
};

const url = "http://localhost:3030/data/motorcycles";

export const getAll = () => {
  return fetch(url).then((res) => res.json());
};

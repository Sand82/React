let url = "http://localhost:3005/api";

export const getAll = () => {
  return fetch(`${url}/users`).then((res) => res.json());
};

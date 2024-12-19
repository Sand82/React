let url = "http://localhost:3005/api/users";

export const getAll = () => {
  return fetch(`${url}`).then((res) => res.json());
};

export const getOne = (userId) => {
  return fetch(`${url}/${userId}`).then((res) => res.json());
};

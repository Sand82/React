let url = "http://localhost:3005/api/users";

export const getAll = () => {
  return fetch(`${url}`).then((res) => res.json());
};

export const getOne = (userId) => {
  return fetch(`${url}/${userId}`).then((res) => res.json());
};

export const addUser = (user) => {
  return fetch(`${url}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const deleteUser = (userId) => {
  return fetch(`${url}/${userId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

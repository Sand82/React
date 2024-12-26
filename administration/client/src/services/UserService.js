let url = "http://localhost:3005/api/users";

///users?page=1&limit=5&search=Chris&criteria=firstName&sort=createdAt&order=desc
export const getAll = (page, sortParams) => {
  return fetch(
    `${url}?page=${page.page}&limit=${page.usersPerPage}&sort=${sortParams.sortColumn}&order=${sortParams.direction}`
  ).then((res) => res.json());
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

export const editUser = (user) => {
  return fetch(`${url}/${user._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

export const deleteUser = (userId) => {
  return fetch(`${url}/${userId}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

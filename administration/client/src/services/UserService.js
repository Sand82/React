let url = "http://localhost:3005/api/users";

export const getAll = (page) => {
  console.log(page);
  return fetch(`${url}?page=${page.page}&limit=${page.usersPerPage}`).then(
    (res) => res.json()
  );
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

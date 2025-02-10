const url = "http://localhost:3030/data/motorcycles";

export const getAll = () => {
  return fetch(url).then((res) => res.json());
};

export const getOne = (motorId) => {
    return fetch(`${url}/${motorId}`).then((res) => res.json());
}

export const create = (data, token) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    },
    body: JSON.stringify(data),
  });
}

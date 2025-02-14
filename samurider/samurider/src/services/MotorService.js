const url = "http://localhost:3030/data/motorcycles";

export const getAll = () => {
  return fetch(url).then((res) => res.json());
};

export const getOne = (motorId) => {
  return fetch(`${url}/${motorId}`).then((res) => res.json());
};

export const create = (data, token) => {
  let requestObject = createFetchObject("POST", token, data);
  return fetch(url, requestObject);
};

export const edit = (data, token) => {
  let requestObject = createFetchObject("PUT", token, data);
  return fetch(`${url}/${data.id}`, requestObject);
};

export const remove = (id, token) => {
  let requestObject = createFetchObject("DELETE", token);
  return fetch(`${url}/${id}`, requestObject);
};

const createFetchObject = (method, token, data) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    },
    body: data && JSON.stringify(data),
  };
};

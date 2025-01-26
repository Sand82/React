import * as ServiceUtiles from "./ServiceUtiles.js";

const url = "http://localhost:3030/data/facts";

export const getAll = () => {
  return fetch(url).then((res) => res.json());
};

export const getOne = (funFactId) => {
  return fetch(`${url}/${funFactId}`).then((res) => res.json());
};

export const create = (data, token) => {
  return fetch(url, {
    method: "POST",
    headers: ServiceUtiles.createHeaders(token),
    body: JSON.stringify(data),
  });
};

export const edit = (data, token, funFactId) => {
  return fetch(`${url}/${funFactId}`, {
    method: "PUT",
    headers: ServiceUtiles.createHeaders(token),
    body: JSON.stringify(data),
  });
};

export const remove = (funFactId, token) => {
  return fetch(`${url}/${funFactId}`, {
    method: "DELETE",
    headers: ServiceUtiles.createHeaders(token),
  });
};

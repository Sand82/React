import * as ServiceUtiles from "./ServiceUtiles.js";

const url = "http://localhost:3030/data/likes";

export const postLike = (funFactId, token) => {
  return fetch(url, {
    method: "POST",
    headers: ServiceUtiles.createHeaders(token),
    body: JSON.stringify(funFactId),
  });
};

export const getTotalLikes = (funFactId, token) => {
  return fetch(
    `${url}?where=factId%3D%22${funFactId}%22&distinct=_ownerId&count`,
    {
      method: "GET",
      headers: ServiceUtiles.createHeaders(token),
    }
  ).then((res) => res.json());
};

//?where=factId%3D%22{factId}%22%20and%20_ownerId%3D%22{userId}%22&count

export const getUserLike = (funFactId, userId ,token) => {
  return fetch(
    `${url}?where=factId%3D%22${funFactId}%22&distinct=_ownerId%3D%22${userId}%22&count`,
    {
      method: "GET",
      headers: ServiceUtiles.createHeaders(token),
    }
  ).then((res) => res.json());
};

const url = "http://localhost:3030/users";

export const login = (data) => {
  let requestObject = createRequestObject(data);
  return fetch(`${url}/login`, requestObject).then((res) => res.json());
};

export const register = (data) => {
  let requestObject = createRequestObject(data);
  return fetch(`${url}/register`, requestObject).then((res) => res.json());
};

export const logout = (token) => {
  return fetch(`${url}/logout`, {
    method: "GET",
    headers: {
      "X-Authorization": `${token}`,
    },
  });
};

const createRequestObject = (data) => {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

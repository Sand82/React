const url = "http://localhost:3030/users/login";

export const login = (data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const createHeaders = (token) => {
    return {
      "Content-Type": "application/json",
      "X-Authorization": `${token}`,
    };
  };
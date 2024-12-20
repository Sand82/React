export const fullNameCreator = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

export const addressCreator = (country, city, cityName, cityNumber) => {
  return `${country} ${city} ${cityName} ${cityNumber}`;
};

export const dateFormater = (date) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let rawDate = new Date(date);

  return rawDate.toLocaleDateString("en-US", options);
};

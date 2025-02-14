import * as Constant from "../constants/GlobalConstants.js";

export const isEmail = (value) => {
  let regex = new RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/);
  return regex.test(value);
};

export const isNotEmpty = (value) => {
  return value.trim() !== "";
};

export const hasMinLength = (value, minLength) => {
  return value ? value.length : 0 >= minLength;
};

export const isEqualToOtherValue = (value, otherValue) => {
  return value === otherValue;
};

export const isValidUrl = (value) => {
  return value && validateImageUrl(value);
};

export const isValidNumberValue = (value, limit) => {
  return +value >= limit;
};

export const isValidYear = (value) => {
  return value >= Constant.yearMinValue && value <= Constant.yearMaxValue;
};

const validateImageUrl = (url) => {
  return (
    url.endsWith(".png") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".jpg") ||
    url.endsWith(".gif")
  );
};

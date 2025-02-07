export const isEmail = (value) => {
  let regex = new RegExp(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/);
  return !regex.test(value);
};

export const isNotEmpty = (value) => {
  return value.trim() === "";
};

export const hasMinLength = (value, minLength) => {
  return value.length < minLength;
};

export const isEqualToOtherValue = (value, otherValue) => {
  return value !== otherValue;
};

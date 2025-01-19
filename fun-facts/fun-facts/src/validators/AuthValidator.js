export const loginValidator = (name, value) => {
  let isNotValid = false;

  if (value.trim().length === 0) {
    return true;
  }

  if (name === "email") {
    let regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    isNotValid = stringChekerByRegex(value, regex);
  }

  if (name === "password" || name === "repeatPassword") {
    isNotValid = value.length < 6;
  } 

  return isNotValid;
};

const stringChekerByRegex = (value, regexValue) => {
  let regex = new RegExp(regexValue);
  return !regex.test(value);
};

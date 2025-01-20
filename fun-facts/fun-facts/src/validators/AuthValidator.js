export const fieldsValidator = (name, value) => {
  let isNotValid = false;

  if (name === "email") {
    let regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    isNotValid = stringChekerByRegex(value, regex);
  }

  if (name === "password" || name === "repeatPassword") {
    isNotValid = value.length < 6;
  }

  return isNotValid;
};

export const passwordsValidation = (password, repeatPassword) => {
  return password !== repeatPassword;
};

const stringChekerByRegex = (value, regexValue) => {
  let regex = new RegExp(regexValue);
  return !regex.test(value);
};

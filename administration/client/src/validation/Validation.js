export const userValidation = (fieldName, fieldValue) => {  

  if (
    fieldName === "firstName" ||
    fieldName === "lastName" ||
    fieldName === "city" ||
    fieldName === "street"
  ) {
    return stringCheker(fieldValue, 3);
  }

  let regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

  if (fieldName === "email") {
    return stringChekerByRegex(fieldValue, regex);
  }

  regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

  if (fieldName === "phoneNumber") {
    return stringChekerByRegex(fieldValue, regex);
  }

  if (fieldName === "imageUrl") {
    return urlChecker(fieldValue);
  }

  if (fieldName === "country") {
    return stringCheker(fieldValue, 2);
  }

  if (fieldName === "streetNumber") {
    return numberCheker(fieldValue, 0);
  }
};

const stringChekerByRegex = (value, regexValue) => {
  let regex = new RegExp(regexValue);
  console.log(value);
  console.log(regex.test(value));
  if (regex.test(value)) {
    return false;
  }
  return true;
};

const numberCheker = (value, limit) => {
  if (Number(value) < limit) {
    return true;
  }
  return false;
};

const stringCheker = (title, bound) => {
  if (title.length < bound) {
    return true;
  }
  return false;
};

const urlChecker = (url) => {
  console.log(url.endsWith(".jpg"));
  if (
    url.endsWith(".png") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".jpg") ||
    url.endsWith(".gif") ||
    url.endsWith(".svg")
  ) {
    return false;
  }
  return true;
};

export const fieldsValidator = (fieldName, value) => {
  let isNotValid = false;

  if (value.trim() === "") {
    return true;
  }

  if (fieldName === "category") {
    isNotValid = value.length < 3;
  }

  if (fieldName === "imageUrl") {
    isNotValid = validateImageUrl(value);
  }

  if (fieldName === "description" || fieldName === "additionalInfo") {
    isNotValid = value.length < 6;
  }

  return isNotValid;
};

const validateImageUrl = (url) => {  
  return !(
    url.endsWith(".png") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".jpg") ||
    url.endsWith(".gif")
  );
};

export const validateState = (error, userInput) => {
  return (
    Object.values(error).some((error) => error) ||
    Object.values(userInput).some(
      (registerField) => registerField.trim() === ""
    )
  );
};

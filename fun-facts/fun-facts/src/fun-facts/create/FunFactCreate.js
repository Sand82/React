import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as FunFactValidator from "../../validators/FunFactValidator.js";
import * as FunFactService from "../../services/FunFactsService.js";
import * as StateValidator from "../../validators/StateValidator.js";
import { AuthContext } from "../../contexts/AuthContext.js";

const FunFactCreate = () => {
  const [funFact, setFunFact] = useState({
    category: "",
    imageUrl: "",
    description: "",
    additionalInfo: "",
  });

  const [error, setError] = useState({
    category: false,
    imageUrl: false,
    description: false,
    additionalInfo: false,
  });

  const [validationError, setValidationError] = useState({
    message: "",
    hasError: false,
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const funFactSubmitHeandler = (e) => {
    e.preventDefault();

    if (StateValidator.validateState(error, funFact)) {
      setValidationError((error) => ({
        message: "Required valid fields information!",
        hasError: true,
      }));

      return;
    }

    FunFactService.create(funFact, user.accessToken).then((response) => {
      if (response.ok) {
        navigate("/fun-facts");
      } else {
        setValidationError((error) => ({
          message: "Something heppened try again later!",
          hasError: true,
        }));
      }
    });
  };

  const funFactChangeHeandler = (e) => {
    setFunFact((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const funFactErrors = (e) => {
    let fieldName = e.target.name;

    let isFieldNotValid = FunFactValidator.fieldsValidator(
      fieldName,
      e.target.value
    );

    setError((state) => ({
      ...state,
      [fieldName]: isFieldNotValid,
    }));
  };

  return (
    <section id="create">
      <div className="form">
        <h2>Add Fact</h2>
        {validationError.hasError && (
          <span className="server-error-massage">
            {validationError.message}
          </span>
        )}
        <form className="create-form" onSubmit={funFactSubmitHeandler}>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            value={funFact.category}
            onChange={funFactChangeHeandler}
            onBlur={funFactErrors}
          />
          {error.category && (
            <span className="field-error-message">
              Category should be more than 3 characters!
            </span>
          )}
          <input
            type="text"
            name="imageUrl"
            id="image-url"
            placeholder="Image URL"
            value={funFact.imageUrl}
            onChange={funFactChangeHeandler}
            onBlur={funFactErrors}
          />
          {error.imageUrl && (
            <span className="field-error-message">
              The field should be valid Image Url!
            </span>
          )}
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows={10}
            cols={50}
            value={funFact.description}
            onChange={funFactChangeHeandler}
            onBlur={funFactErrors}
          />
          {error.description && (
            <span className="field-error-message">
              Description should be more than 6 characters!
            </span>
          )}
          <textarea
            id="additional-info"
            name="additionalInfo"
            placeholder="Additional Info"
            rows={10}
            cols={50}
            value={funFact.additionalInfo}
            onChange={funFactChangeHeandler}
            onBlur={funFactErrors}
          />
          {error.additionalInfo && (
            <span className="field-error-message">
              Additional information should be more than 6 characters!
            </span>
          )}
          <button type="submit">Add Fact</button>
        </form>
      </div>
    </section>
  );
};

export default FunFactCreate;

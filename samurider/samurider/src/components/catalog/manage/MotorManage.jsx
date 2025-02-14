import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  hasMinLength,
  isValidUrl,
  isValidYear,
  isValidNumberValue,
  isNotEmpty,
} from "../../../validators/Validation.js";
import { useInput } from "../../../hooks/useInput.js";
import Input from "../../UI/Input.jsx";
import * as Constant from "../../../constants/GlobalConstants.js";
import { AuthContext } from "../../../contexts/AuthContext.jsx";
import * as MotorService from "../../../services/MotorService.js";

const MotorManage = () => {
  const { id } = useParams();

  const [motor, setMotor] = useState({
    model: "",
    imageUrl: "",
    year: "",
    mileage: "",
    contact: "",
    about: "",
  });

  useEffect(() => {
    if (id) {
      MotorService.getOne(id).then((response) => {
        setMotor(response);
      });
    }
  }, [id]);

  const {
    value: modelValue,
    changeHeandler: modelChangeHeandler,
    hasError: modelError,
    inputBlurHeandler: modelInputBluerHeandler,
  } = useInput(motor ? motor.model : "", (value) =>
    hasMinLength(value, Constant.modelMinLength)
  );

  const {
    value: imageUrlValue,
    changeHeandler: imageUrlChangeHeandler,
    hasError: imageUrlError,
    inputBlurHeandler: imageUrlInputBluerHeandler,
  } = useInput(motor ? motor.imageUrl : "", (value) => isValidUrl(value));

  const {
    value: yearValue,
    changeHeandler: yearChangeHeandler,
    hasError: yearError,
    inputBlurHeandler: yearInputBluerHeandler,
  } = useInput(motor ? motor.year : "", (value) => isValidYear(value));

  const {
    value: mileageValue,
    changeHeandler: mileageChangeHeandler,
    hasError: mileageError,
    inputBlurHeandler: mileageInputBluerHeandler,
  } = useInput(motor ? motor.mileage : "", (value) =>
    isValidNumberValue(value, Constant.mileageMinValue)
  );

  const {
    value: contactValue,
    changeHeandler: contactChangeHeandler,
    hasError: contactError,
    inputBlurHeandler: contactInputBluerHeandler,
  } = useInput(motor ? motor.contact : "", (value) =>
    hasMinLength(value, Constant.contactMinLength)
  );

  const {
    value: aboutValue,
    changeHeandler: aboutChangeHeandler,
    hasError: aboutError,
    inputBlurHeandler: aboutInputBluerHeandler,
  } = useInput(motor ? motor.about : "", (value) =>
    hasMinLength(value, Constant.aboutMinLength)
  );

  const [generalErrors, setGeneralErrors] = useState({
    message: "",
    hasError: false,
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const createSubmitHeandler = (e) => {
    e.preventDefault();

    if (hasModelError()) {
      return;
    }

    if (haveEmptyFields()) {
      setGeneralErrors((error) => ({
        message: "All fields are required.",
        hasError: true,
      }));
      return;
    }

    let motorData = {
      model: modelValue,
      imageUrl: imageUrlValue,
      year: yearValue,
      mileage: mileageValue,
      contact: contactValue,
      about: aboutValue,
    };

    if (id) {
      editMotor({ ...motorData, id: id });
      console.log(motorData);
    } else {
      createMotor(motorData);
    }

    navigate("/catalog");
  };

  const createMotor = (motorData) => {
    MotorService.create(motorData, user.accessToken).then((responce) => {
      if (!responce.ok) {
        setGeneralErrors((error) => ({
          message: "Something went wrong. Try again later.",
          hasError: true,
        }));
        return;
      }
    });
  };

  const editMotor = (motorData) => {
    MotorService.edit(motorData, user.accessToken).then((responce) => {
      if (!responce.ok) {
        setGeneralErrors((error) => ({
          message: "Something went wrong. Try again later.",
          hasError: true,
        }));
        return;
      }
    });
  };

  const hasModelError = () => {
    return (
      modelError ||
      imageUrlError ||
      aboutError ||
      contactError ||
      mileageError ||
      yearError
    );
  };

  const haveEmptyFields = () => {
    return (
      !isNotEmpty(modelValue) ||
      !isNotEmpty(imageUrlValue) ||
      !isNotEmpty(yearValue) ||
      !isNotEmpty(mileageValue) ||
      !isNotEmpty(contactValue) ||
      !isNotEmpty(aboutValue)
    );
  };

  const operationName = id ? "Edit" : "Add";

  return (
    <section id="create">
      <h2>{operationName} Motorcycle</h2>
      <div className="form">
        <h2>{operationName} Motorcycle</h2>
        {generalErrors.hasError && (
          <span className="general-error-massage">{generalErrors.message}</span>
        )}
        <form className="create-form" onSubmit={createSubmitHeandler}>
          <Input
            label="Model"
            type="text"
            name="model"
            id="model"
            value={modelValue}
            onChange={modelChangeHeandler}
            onBlur={modelInputBluerHeandler}
            error={
              modelError &&
              `Model should be more than ${Constant.modelMinLength} symbols!`
            }
          />

          <Input
            label="Motor Image"
            type="text"
            name="imageUrl"
            id="moto-image"
            value={imageUrlValue}
            onChange={imageUrlChangeHeandler}
            onBlur={imageUrlInputBluerHeandler}
            error={imageUrlError && "Invalid Image Url format!"}
          />

          <Input
            label="Year"
            type="number"
            name="year"
            id="year"
            value={yearValue}
            onChange={yearChangeHeandler}
            onBlur={yearInputBluerHeandler}
            error={
              yearError &&
              `Year should be between ${Constant.yearMinValue} and ${Constant.yearMaxValue}!`
            }
          />

          <Input
            label="Mileage"
            type="number"
            name="mileage"
            id="mileage"
            value={mileageValue}
            onChange={mileageChangeHeandler}
            onBlur={mileageInputBluerHeandler}
            error={mileageError && "Mileage should be positive number!"}
          />

          <Input
            label="Contact"
            type="text"
            name="contact"
            id="contact"
            value={contactValue}
            onChange={contactChangeHeandler}
            onBlur={contactInputBluerHeandler}
            error={
              contactError &&
              `Contact should be more than ${Constant.contactMinLength} symbols!`
            }
          />

          <Input
            label="About"
            id="about"
            fieldType="textarea"
            name="about"
            rows={10}
            cols={50}
            value={aboutValue}
            onChange={aboutChangeHeandler}
            onBlur={aboutInputBluerHeandler}
            error={
              aboutError &&
              `About should be more than ${Constant.aboutMinLength} symbols!`
            }
          />

          <button type="submit">{operationName} Motorcycle</button>
        </form>
      </div>
    </section>
  );
};

export default MotorManage;

import { hasMinLength, isValidUrl, isValidYear, isValidNumberValue } from "../../../validators/Validation.js"
import { useInput } from "../../../hooks/useInput.js";
import Input from "../../UI/Input.jsx";
import * as Constant from "../../../constants/GlobalConstants.js"

const MotorCreate = () => {
  const {
      value: modelValue,
      changeHeandler: modelChangeHeandler,
      hasError: modelError,
      inputBlurHeandler: modelInputBluerHeandler,
    } = useInput("", (value) => hasMinLength(value, Constant.modelMinLength));

  const {
    value: imageUrlValue,
    changeHeandler: imageUrlChangeHeandler,
    hasError: imageUrlError,
    inputBlurHeandler: imageUrlInputBluerHeandler,
  } = useInput("", (value) => isValidUrl(value));

  const {
    value: yearValue,
    changeHeandler: yearChangeHeandler,
    hasError: yearError,
    inputBlurHeandler: yearInputBluerHeandler,
  } = useInput("", (value) => isValidYear(value));

  const {
    value: mileageValue,
    changeHeandler: mileageChangeHeandler,
    hasError: mileageError,
    inputBlurHeandler: mileageInputBluerHeandler,
  } = useInput("", (value) => isValidNumberValue(value, Constant.mileageMinValue));

  const {
    value: contactValue,
    changeHeandler: contactChangeHeandler,
    hasError: contactError,
    inputBlurHeandler: contactInputBluerHeandler,
  } = useInput("", (value) => hasMinLength(value, Constant.contactMinLength));

  const {
    value: aboutValue,
    changeHeandler: aboutChangeHeandler,
    hasError: aboutError,
    inputBlurHeandler: aboutInputBluerHeandler,
  } = useInput("", (value) => hasMinLength(value, Constant.aboutMinLength));

    return (
        <section id="create">
        <h2>Add Motorcycle</h2>
        <div className="form">
          <h2>Add Motorcycle</h2>
          <form className="create-form">

            <Input 
              label="Model"
              type="text" 
              name="model" 
              id="model"  
              value={modelValue}
              onChange={modelChangeHeandler}
              onBlur={modelInputBluerHeandler}
              error={modelError && `Model should be more than ${Constant.modelMinLength} symbols!`} 
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
              error={yearError && `Year should be between ${Constant.yearMinValue} and ${Constant.yearMaxValue}!`} 
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
              error={contactError && "Contact is required!"} 
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
              error={aboutError && `About should be more than ${Constant.aboutMinLength} symbols!`} 
            />
            
            <button type="submit">Add Motorcycle</button>
          </form>
        </div>
      </section>
    )
}

export default MotorCreate;
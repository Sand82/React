const Input = ({ id, label, error, ...props }) => {
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input id={id} {...props} />
      {error && <span className="field-error-message">{error}</span>}
    </>
  );
};

export default Input;

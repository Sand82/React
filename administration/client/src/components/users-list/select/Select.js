import PageOptions from "../../../constants/PageOptions.js";

const Select = ({ selectOptionHeandler }) => {
  const optionHeandler = (e) => {
    selectOptionHeandler(e.target.value);
  };

  return (
    <div className="limits">
      <span>Items per page:</span>
      <select
        name="limit"
        className="limit"
        defaultValue={PageOptions[0]}
        onChange={optionHeandler}
      >
        {PageOptions.map((x, i) => (
          <option key={i} value={x}>
            {x}
          </option>
        ))}
        {/* <option value={PageOptions[1]}>{PageOptions[1]}</option>
        <option value={PageOptions[2]}>{PageOptions[2]}</option>
        <option value={PageOptions[3]}>{PageOptions[3]}</option>
        <option value={PageOptions[4]}>{PageOptions[4]}</option> */}
      </select>
    </div>
  );
};

export default Select;

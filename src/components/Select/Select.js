import { useState } from "react";
import "./Select.css";

const Select = ({
  selectOptions = [],
  selectedValue = "none",
  name = "",
  onChangeSelect,
}) => {
  const [, setSelectedOption] = useState(selectedValue);
  if (Array.isArray(selectOptions) && !selectOptions.length) {
    return null;
  }

  const handleOnChange = (event) => {
    setSelectedOption(event.target.value);
    onChangeSelect(event.target.value);
  };

  return (
    <div className={`wrapper-select selector-${name}`}>
      <select name={name} onChange={(event) => handleOnChange(event)}>
        {selectOptions.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.display}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

import React, { useState } from "react";
import "./SearchHeader.css";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="container">
      <div>
        <form className="searchform" onSubmit={handleFormSubmit}>
          <input
            placeholder="Ne Arıyorsunuz?"
            value={valueInput}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchHeader;

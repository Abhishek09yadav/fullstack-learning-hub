import React, { useState, useEffect } from "react";

const Page = () => {
  const [value, setValue] = useState(() => {
    const ini = localStorage.getItem("inputValue");
    return ini !== null ? ini : "";
  });

  const handleChange = (curr) => {
    console.log("value is ", curr);
    setValue(curr);
    localStorage.setItem("inputValue", curr);
  };

  return (
    <div>
      <input
        data-testid="input-id"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Page;

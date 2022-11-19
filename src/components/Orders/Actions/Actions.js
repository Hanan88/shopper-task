import React from "react";

const Actions = ({ onPrint }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "printAll") {
      onPrint();
    }
    event.target.value = "";
  };

  return (
    <div className="actions ms-2">
      <select className="w-25 form-select ms-2" onChange={handleChange}>
        <option value="">Actions</option>
        <option value="hold">Hold</option>
        <option value="unhold">UnHold</option>
        <option value="printAll">Print all</option>
      </select>
    </div>
  );
};

export default Actions;

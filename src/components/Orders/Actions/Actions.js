import React from "react";

const Actions = () => {
  return (
    <div className="actions ms-2">
      <select className="w-25 form-select ms-2">
        <option value="" disabled>Actions</option>
        <option>Hold</option>
        <option>UnHold</option>
        <option>Print all</option>
      </select>
      </div>
  );
};

export default Actions;

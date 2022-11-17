import React from "react";

const Actions = () => {
  return (
    <div className="actions ms-2">
      <select className="w-25 form-select ms-2">
        <option value="">Actions</option>
        <option value="hold">Hold</option>
        <option value="unhold">UnHold</option>
        <option value="printAll">Print all</option>
      </select>
      </div>
  );
};

export default Actions;

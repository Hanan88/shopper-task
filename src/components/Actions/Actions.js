import React from "react";

const Actions = () => {
  return (
    <div className="actions ms-2">
      <ul className="actions_list d-flex">
        <li className="actions_list_item">
          <button className="actions_list_item_btn">Hold</button>
        </li>
        <li className="actions_list_item">
          <button className="actions_list_item_btn">UnHold</button>
        </li>
        <li className="actions_list_item">
          <button className="actions_list_item_btn">Print all</button>
        </li>
      </ul>
    </div>
  );
};

export default Actions;

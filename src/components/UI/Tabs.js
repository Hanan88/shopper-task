import React from "react";

const Tabs = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="tabs">
      <ul className="tabs_list">
        <li className="tabs_list_item" onClick={handleClose}>
          Orders
        </li>
        <li className="tabs_list_item">Invoices</li>
      </ul>
    </div>
  );
};

export default Tabs;

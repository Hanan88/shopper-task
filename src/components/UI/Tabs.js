import React from "react";
import { Link } from "react-router-dom";
import './Tabs.css'
const Tabs = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="tabs">
      <ul className="tabs_list">
        <Link to="/">
          <li className="tabs_list_item" onClick={handleClose}>
            Dashboard
          </li>
        </Link>
        <Link to="/orders">
          <li className="tabs_list_item" onClick={handleClose}>
            Orders
          </li>
        </Link>

        <li className="tabs_list_item">Invoices</li>
      </ul>
    </div>
  );
};

export default Tabs;

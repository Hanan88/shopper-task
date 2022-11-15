import React from "react";

const NewOrder = () => {
  return (
    <div className="newOrder text-end">
      <button className="btn_newOrder" onClick={console.log("new order")}>
        New Order
      </button>
    </div>
  );
};

export default NewOrder;

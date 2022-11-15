import React from "react";
import NewOrder from "./NewOrder";
import Order from "./Order";
import Search from "./Search";

const MainOrders = () => {
  return (
    <div className="mainOrder">
      <NewOrder />
      <Search />
      <Order />
    </div>
  );
};

export default MainOrders;

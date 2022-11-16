import React from "react";
import NewOrder from "./NewOrder";
import Order from "./Order";
import Search from "./Filters/Search";
import Actions from "./Actions/Actions";

const MainOrders = () => {
  return (
    <div className="mainOrder">
      <NewOrder />
      <Search />
      <Actions />
      <Order />
    </div>
  );
};

export default MainOrders;

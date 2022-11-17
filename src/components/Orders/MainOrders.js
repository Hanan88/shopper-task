import React, { useEffect, useState } from "react";
import NewOrder from "./NewOrder";
import Search from "./Filters/Search";
import Filter from "./Filters/Filter";
import Actions from "./Actions/Actions";
import Order from "./Order";

const MainOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);

  const getOrder = () => {
    fetch(process.env.PUBLIC_URL + "Data/Orders.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data.orders);
        setFilterOrders(data.orders);
      });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="mainOrder">
      <NewOrder />
      <Search orders={orders} setFilterOrders={setFilterOrders} />
      <Filter />
      <Actions />
      <Order filterOrders={filterOrders} setFilterOrders={setFilterOrders} />
    </div>
  );
};

export default MainOrders;

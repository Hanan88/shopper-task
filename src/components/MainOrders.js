import React, { useEffect, useState }  from "react";
import NewOrder from "./NewOrder";
import Order from "./Order";
import Search from "./Filters/Search";
import Actions from "./Actions/Actions";
import Filter from "./Filters/Filter";

const MainOrders = () => {
  const [orders, setOrders] = useState([]);

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
      });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="mainOrder">
      <NewOrder />
      <Search orders={orders} setOrders={setOrders}/>
      <Filter />
      <Actions />
      <Order orders={orders} setOrders={setOrders} />
    </div>
  );
};

export default MainOrders;

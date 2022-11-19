import React, { useEffect, useState, useRef } from "react";
import NewOrder from "./NewOrder";
import Search from "./Filters/Search";
import Filter from "./Filters/Filter";
import Actions from "./Actions/Actions";
import Order from "./Order";
import { useReactToPrint } from "react-to-print";

const MainOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
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




  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  const onPrint = async () => {
    console.log("klkl");
    await filterOrders.map((order) => {
      if (order.isChecked === true) {
        console.log(order.isChecked, "++++++");
        setSelectedOrder([selectedOrder, order.customerEmail]);
      } else {
        console.log("non");
        // setSelectedOrder([...selectedOrder, selectedOrder.filter(e => e !== order.customerEmail)]);
        // setSelectedOrder(selectedOrder.filter(e => e !== order.customerEmail))
      }
    });
    handlePrint();
  };


  return (
    <div className="mainOrder">
      <NewOrder />
      <Search orders={orders} setFilterOrders={setFilterOrders} />
      <Filter />
      <Actions onPrint={onPrint}/>
      <Order
        filterOrders={filterOrders}
        setFilterOrders={setFilterOrders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      <div ref={componentRef} className="toPrint">
        {selectedOrder}
      </div>
    </div>
  );
};

export default MainOrders;

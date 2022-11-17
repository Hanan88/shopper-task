import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Tabs from "./components/UI/Tabs";
import Dashboard from "./components/Dashboard/Dashboard";
import MainOrders from "./components/Orders/MainOrders";
import OrderDetails from "./components/Orders/OrderDetails";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <div className="d-flex">
        {open === true ? (
          <Tabs setOpen={setOpen} />
        ) : (
          <div>
            <AiOutlineDoubleLeft
              onClick={handleOpen}
              className="App_Svg"
            ></AiOutlineDoubleLeft>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<MainOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

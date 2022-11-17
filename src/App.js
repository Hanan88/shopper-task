import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Tabs from "./components/UI/Tabs";
import MainOrders from "./components/Orders/MainOrders";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;

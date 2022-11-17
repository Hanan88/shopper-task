import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import Tabs from "./components/UI/Tabs";
import MainOrders from "./components/Orders/MainOrders";
import { AiOutlineDoubleLeft } from "react-icons/ai";
function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      {open === true ? (
        <Tabs setOpen={setOpen} />
      ) : (
        <AiOutlineDoubleLeft onClick={handleOpen} className="App_Svg"></AiOutlineDoubleLeft>
      )}
      <MainOrders />
    </div>
  );
}

export default App;

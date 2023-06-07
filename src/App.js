import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import Orders from "./Pages/Orders";
import Inventory from "./Pages/Inventory";
import Offers from "./Pages/Offers";
import Premium from "./Pages/Premium";
import CreateOrders from "./Pages/CreateOrders";
import "./App.css";
import Support from "./Pages/Support";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Orders/>} />

          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/create" element={<CreateOrders />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;

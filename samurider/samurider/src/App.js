import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.js";
import Catalog from "./components/catalog/Catalog.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import MotorDetails from "./components/catalog/details/MotorDetails.js";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/details/:id" element={<MotorDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

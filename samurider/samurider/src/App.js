import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import MotorDetails from "./components/catalog/details/MotorDetails.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import MotorCreate from "./components/catalog/create/MotorCreate.jsx";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/create" element={<MotorCreate />} />
            <Route path="/catalog/details/:id" element={<MotorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;

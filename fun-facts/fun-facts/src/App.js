import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./home/Home.js";
import FunFactsList from "./fun-facts/FunFactsList.js";
import FunFactCreate from "./fun-facts/create/FunFactCreate.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import Logout from "./components/Logout.js";

function App() {
  return (
    <div className="App">
      <>
        <AuthProvider>
          <div id="wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fun-facts" element={<FunFactsList />} />
              <Route path="/create" element={<FunFactCreate />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </>
    </div>
  );
}

export default App;

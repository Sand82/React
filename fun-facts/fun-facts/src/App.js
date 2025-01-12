import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./home/Home.js";
import FunFactsList from "./fun-facts/FunFactsList.js";
import FunFactsCreate from "./fun-facts/create/FunFactsCreate.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <>
        <div id="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fun-facts" element={<FunFactsList />} />
            <Route path="/create" element={<FunFactsCreate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;

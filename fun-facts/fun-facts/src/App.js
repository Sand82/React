import "./App.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./home/Home.js";
import FunFactsList from "./fun-facts/FunFactsList.js";
import FunFactManage from "./fun-facts/createEdit/FunFactManage.js";
import FunFactDelete from "./fun-facts/delete/FunFactDelete.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import FunFactDetail from "./fun-facts/detail/FunFactDetail.js";
import * as modification from "./services/Modification.js";

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
              <Route
                path="/create"
                element={<FunFactManage type={modification.type.create} />}
              />
              <Route
                path="/fun-facts/edit/:id"
                element={<FunFactManage type={modification.type.edit} />}
              />
              <Route path="/fun-facts/detail/:id" element={<FunFactDetail />} />
              <Route path="/fun-facts/delete/:id" element={<FunFactDelete />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </>
    </div>
  );
}

export default App;

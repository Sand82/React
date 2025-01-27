import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.js";
import Catalog from "./components/dashboard/Catalog.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

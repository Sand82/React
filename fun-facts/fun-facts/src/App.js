import "./App.css";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Home from "./home/Home.js";

function App() {
  return (
    <div className="App">
      <>
        <div id="wrapper">
          <Header />
          <Home />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;

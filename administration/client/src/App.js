import Footer from "./common/Footer.js";
import Header from "./common/Header.js";

import UserList from "./components/users-list/UsersList.js";

function App() {
  return (
    <div className="App">
      <Header />

      <main class="main">
        <section class="card users-container">
          <UserList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

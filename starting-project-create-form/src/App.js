import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (data) => {
    setUsersList((oldState) => {
      return [data, ...oldState];
    });
  };

  return (
    <div>
      <AddUser onAddUsers={addUsersHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;

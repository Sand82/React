import { useEffect, useState } from "react";

import * as UserService from "../../services/UserService.js";
import ActionTypes from "../../constants/ActionTypes.js";

import SearchBar from "../search-bar/SearchBar.js";
import UserTableThead from "./user-table-thead/UserTableThead.js";
import UserTableTbody from "./user-table-tbody/UserTableTbody.js";
import UserDetails from "./user-details/UserDetails.js";
import UserModify from "./user-modify/UserModify.js";
import UserDelete from "./user-delete/UserDelete.js";
import UserPagination from "./user-pagination/UserPagination.js";

const UserList = () => {
  const [usersInfo, setUsersInfo] = useState({ users: [], count: 0 });
  const [action, setAction] = useState({ user: null, action: null });

  useEffect(() => {
    UserService.getAll().then((data) =>
      setUsersInfo({ users: data.users, count: data.count })
    );
  }, []);

  const actionHandler = (userId, action) => {
    if (userId) {
      UserService.getOne(userId).then((data) => {
        setAction({ user: data.user, action: action });
      });
    } else {
      setAction({ user: null, action: action });
    }
  };

  const closeHeandler = () => {
    setAction({ user: null, action: null });
  };

  const addUserHandler = (user) => {
    let { _id, ...userToAdd } = user;
    UserService.addUser(userToAdd).then((data) =>
      setUsersInfo([...usersInfo, data.user])
    );
  };

  const editUserHandler = (user) => {
    UserService.editUser(user).then((data) => {
      let unModifyUsers = usersInfo.filter(
        (oldUser) => oldUser._id !== user._id
      );
      setUsersInfo([...unModifyUsers, user]);
    });
  };

  const removeUserHandler = (userId) => {
    UserService.deleteUser(userId);
    setUsersInfo((oldUsers) => [
      ...oldUsers.filter((user) => user._id !== userId),
    ]);
  };

  let userPerPage = Math.ceil();

  return (
    <section className="card users-container">
      {action.user && action.action === ActionTypes.Detail && (
        <UserDetails user={action.user} modelCloseHeandler={closeHeandler} />
      )}

      {action.action === ActionTypes.Add && (
        <UserModify
          user={null}
          modelCloseHeandler={closeHeandler}
          manageUser={addUserHandler}
        />
      )}

      {action.user && action.action === ActionTypes.Edit && (
        <UserModify
          user={action.user}
          modelCloseHeandler={closeHeandler}
          manageUser={editUserHandler}
        />
      )}

      {action.user && action.action === ActionTypes.Delete && (
        <UserDelete
          user={action.user}
          modelCloseHeandler={closeHeandler}
          deleteUser={removeUserHandler}
        />
      )}

      {/* Search bar component */}
      {/* <SearchBar /> */}
      {/* Table component */}
      <div className="table-wrapper">
        {/* Overlap components */}
        <table className="table">
          <thead>
            <UserTableThead />
          </thead>
          <tbody>
            {/* Table row component */}

            {usersInfo.map((user) => (
              <tr key={user._id}>
                <UserTableTbody user={user} actionHandler={actionHandler} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* New user button */}
      <button
        className="btn-add btn"
        onClick={() => actionHandler(null, ActionTypes.Add)}
      >
        Add new user
      </button>
      {/* Pagination component */}
      <UserPagination usersPerPage={5} />
    </section>
  );
};

export default UserList;

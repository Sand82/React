import { useEffect, useState } from "react";

import * as UserService from "../../services/UserService.js";
import ActionTypes from "../../constants/ActionTypes.js";

import SearchBar from "./search-bar/SearchBar.js";
import UserTableThead from "./user-table-thead/UserTableThead.js";
import UserTableTbody from "./user-table-tbody/UserTableTbody.js";
import UserDetails from "./user-details/UserDetails.js";
import UserModify from "./user-modify/UserModify.js";
import UserDelete from "./user-delete/UserDelete.js";
import UserPagination from "./user-pagination/UserPagination.js";
import PageOptions from "../../constants/PageOptions.js";
import Criterias from "../../constants/Criterias.js";

const UserList = () => {
  const [usersInfo, setUsersInfo] = useState({ users: [], count: 0 });
  const [action, setAction] = useState({ user: null, action: null });
  const [page, setPage] = useState({ page: 1, usersPerPage: PageOptions[0] });
  const [searchValue, setSearchValue] = useState("");
  const [sortParams, setSortParams] = useState({
    sortColumn: Criterias.firstName,
    direction: "asc",
  });

  useEffect(() => {
    UserService.getAll(page, sortParams, searchValue).then((data) =>
      setUsersInfo({ users: data.users, count: data.count })
    );
  }, [page, sortParams, searchValue]);

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

  const currentPageInfoHeandler = (pageInfo) => {
    setPage({ page: pageInfo.pageNumber, usersPerPage: pageInfo.usersPerPage });
  };

  const sortHeandler = (params) => {
    setSortParams({
      sortColumn: params.criteria,
      direction: params.order ? "asc" : "desc",
    });
  };

  const searchHeandler = (value) => {
    setSearchValue(value);
  };

  const addUserHandler = (user) => {
    let { _id, ...userToAdd } = user;
    UserService.addUser(userToAdd).then((data) =>
      setUsersInfo((currUserInfo) => ({
        users:
          currUserInfo.count < page.usersPerPage
            ? [...usersInfo.users, data.user]
            : [...usersInfo.users],
        count: currUserInfo.count + 1,
      }))
    );
  };

  const editUserHandler = (user) => {
    UserService.editUser(user).then((data) => {
      let unModifyUsers = usersInfo.users.filter(
        (value) => user._id != value._id
      );
      setUsersInfo((currUserInfo) => ({
        users: [...unModifyUsers, user],
        count: currUserInfo.count,
      }));
    });
  };

  const removeUserHandler = (userId) => {
    UserService.deleteUser(userId);
    setUsersInfo((currUsersInfo) => ({
      users: [...currUsersInfo.users.filter((user) => user._id !== userId)],
      count: currUsersInfo.count - 1,
    }));
  };

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
      <SearchBar searchHeandler={searchHeandler} />
      {/* Table component */}
      <div className="table-wrapper">
        {/* Overlap components */}
        <table className="table">
          <thead>
            <UserTableThead sortHeandler={sortHeandler} />
          </thead>
          <tbody>
            {/* Table row component */}

            {usersInfo.users.map((user) => (
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
      <UserPagination
        usersPerPage={5}
        usersCount={usersInfo.count}
        pageHeandler={currentPageInfoHeandler}
      />
    </section>
  );
};

export default UserList;

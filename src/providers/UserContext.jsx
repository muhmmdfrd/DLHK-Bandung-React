import React, { createContext, useState } from "react";
import {
  GetUser,
  AddUser,
  UpdateUser,
  DeleteUser,
  GetUserId,
} from "../Services/UserService";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState({});
  const [loading, setLoading] = useState(true);
  const [statusModal, setStatus] = useState("");

  const addUser = (data) => {
    AddUser(data)
      .then(() => alert(`data berhasil di${statusModal}`))
      .then(() => {
        window.$("#btn-submit-user-account").prop("disabled", false);
        window.$("#btn-submit-user-text").text("Submit");
      })
      .then(() => window.$("#userModal").modal("hide"))
      .finally(() =>
        GetUser()
          .then((response) => {
            setUser(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          })
      );
  };

  const handleEdit = (id) => {
    setStatus("edit");
    window.$(`#btn-edit-user-${id}`).prop("disabled", true);
    window.$(`#span-btn-${id}`).text("loading...");

    GetUserId(id)
      .then((response) => setUserId(response.data.data))
      .then(() => window.$("#userModal").modal("toggle"))
      .finally(() => {
        window.$(`#btn-edit-user-${id}`).prop("disabled", false);
        window.$(`#span-btn-${id}`).text("Edit");
      });
  };

  const updateUser = (data) => {
    UpdateUser(data)
      .then(() => alert(`data berhasil di${statusModal}`))
      .then(() => {
        window.$("btn-submit-user").prop("disabled", false);
        window.$("btn-submit-user-text").val("Submit");
      })
      .then(() => window.$("#userModal").modal("hide"))
      .finally(() =>
        GetUser()
          .then((response) => {
            setUser(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          })
      );
  };

  const deleteUser = (id) => {
    window.$(`btn-submit-user-${id}`).prop("disabled", true);
    window.$(`text-btn-${id}`).val("loading...");
    DeleteUser(id)
      .then(() => alert("data berhasil dihapus"))
      .finally(() =>
        GetUser()
          .then((response) => {
            setUser(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          })
      );
  };

  const objValue = {
    user,
    statusModal,
    setStatus,
    userId,
    loading,
    addUser,
    updateUser,
    deleteUser,
    handleEdit,
  };

  return (
    <UserContext.Provider value={objValue}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };

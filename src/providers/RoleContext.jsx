import React, { createContext, useEffect, useState } from "react";
import {
  EditRole,
  GetRoleApp,
  GetRoleData,
  GetRoleDataId,
} from "../Services/RoleService";

const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const [role, setRole] = useState([]);
  const [app, setApp] = useState([]);
  const [dataRoleId, setRoleId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetRoleData()
        .then((response) => {
          setRole(response.data.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 20000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetRoleApp()
        .then((response) => {
          setApp(response.data.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 20000);
  }, []);

  const handleEdit = (id) => {
    window.$(`#span-btn-${id}`).text("Load..");
    GetRoleDataId(id)
      .then((response) => setRoleId(response.data.data))
      .finally(() => {
        window.$(`#span-btn-${id}`).text("Edit");
        window.$("#roleModal").modal("toggle");
      });
  };

  const editRole = (data) => {
    EditRole(data)
      .then(() => alert("data berhasil diedit"))
      .then(() => window.$("#roleModal").modal("hide"))
      .then(() => {
        window.$("#btnRole").prop("disabled", false).html("Save");
      })
      .finally(() => {
        GetRoleData()
          .then((response) => {
            setRole(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          });
      });
  };

  const objValue = {
    role,
    app,
    dataRoleId,
    loading,
    handleEdit,
    editRole,
  };

  return (
    <RoleContext.Provider value={objValue}>{children}</RoleContext.Provider>
  );
};

export { RoleProvider, RoleContext };

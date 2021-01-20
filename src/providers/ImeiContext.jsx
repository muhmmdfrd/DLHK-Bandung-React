import React, { createContext, useState } from "react";
import {
  GetImei,
  AddImei,
  UpdateImei,
  DeleteImei,
  GetImeiId,
} from "../Services/ImeiService";

const ImeiContext = createContext();

const ImeiProvider = ({ children }) => {
  const [imei, setData] = useState([]);
  const [imeiId, setDataId] = useState({});
  const [loading, setLoading] = useState(true);
  const [statusModal, setStatus] = useState("");

  const addImei = (data) => {
    AddImei(data)
      .then(() => alert(`data berhasil di${statusModal}`))
      .then(() => {
        window.$("#btn-submit-imei").prop("disabled", false);
        window.$("#btn-submit-imei-text").text("Submit");
      })
      .then(() => window.$("#imeiModal").modal("hide"))
      .finally(() =>
        GetImei()
          .then((response) => {
            setData(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          })
      );
  };

  const handleEdit = (id) => {
    setStatus("edit");
    window.$(`#btn-edit-imei-${id}`).prop("disabled", true);
    window.$(`#span-btn-${id}`).text("loading...");

    GetImeiId(id)
      .then((response) => setDataId(response.data.data))
      .then(() => window.$("#imeiModal").modal("toggle"))
      .finally(() => {
        window.$(`#btn-edit-imei-${id}`).prop("disabled", false);
        window.$(`#span-btn-${id}`).text("Edit");
      });
  };

  const updateImei = (data) => {
    UpdateImei(data)
      .then(() => alert(`data berhasil di${statusModal}`))
      .then(() => {
        window.$("#btn-submit-imei").prop("disabled", false);
        window.$("#btn-submit-imei-text").text("Submit");
      })
      .then(() => window.$("#imeiModal").modal("hide"))
      .finally(() =>
        GetImei()
          .then((response) => {
            setData(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          })
      );
  };

  const deleteImei = (id) => {
    window.$(`#btn-submit-imei-${id}`).prop("disabled", true);
    window.$(`#text-btn-${id}`).val("loading...");
    DeleteImei(id)
      .then(() => alert("data berhasil dihapus"))
      .finally(() =>
        GetImei()
          .then((response) => {
            setData(response.data.data);
          })
          .finally(() => {
            setLoading(false);
          })
      );
  };

  const objValue = {
    imei,
    imeiId,
    statusModal,
    setStatus,
    loading,
    addImei,
    updateImei,
    deleteImei,
    handleEdit,
  };

  return (
    <ImeiContext.Provider value={objValue}>{children}</ImeiContext.Provider>
  );
};

export { ImeiProvider, ImeiContext };

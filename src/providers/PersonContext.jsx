import React, { createContext, useState, useEffect } from "react";

// * service
import {
  GetPersonData,
  GetPersonDataId,
  AddPerson,
  SendEmail,
  EditPerson,
  DeletePerson,
  DeletePersonEmployee,
} from "../Services/PersonService";

const PersonContext = createContext();

const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState([]);
  const [dataPersonId, setDataPersonId] = useState({});
  const [modalStatus, setModalStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetPersonData()
        .then((response) => setPerson(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  // * method for person
  const showModal = () => window.$("#addEmployeeModal").modal("toggle");

  const handleAdd = () => {
    setModalStatus("Tambah");
    showModal();
  };

  const handleEdit = (id) => {
    GetPersonDataId(id).then((response) => setDataPersonId(response.data.data));
  };

  // * method interaction with API
  const addPerson = (data) => {
    AddPerson(data)
      .then((response) => {
        window.localStorage.setItem("_pid", response.data.data.personId);
      })
      .finally(() => {
        alert("data berhasil ditambah");
        window.location.href = "/#/pelamar/kirim-dokumen";
        window.$("#btn-applicant-submit").val("Submit");
      });
  };

  const editPerson = (data) => {
    EditPerson(data)
      .then(() => alert("data berhasil diedit"))
      .then(() => window.$("#btnDetailEdit").prop("disabled", false))
      .then(() => {
        GetPersonData()
          .then((response) => setPerson(response.data.data))
          .finally(() => setLoading(false));
      });
  };

  const deletePerson = (id) => {
    if (window.confirm("Apakah yakin ingin menghapus data tersebut?"))
      DeletePersonEmployee(id)
        .then(() => alert("data berhasil dihapus"))
        .finally(() => {
          GetPersonData()
            .then((response) => setPerson(response.data.data))
            .finally(() => {
              setLoading(false);
            });
        });
  };

  const sendEmail = (data) => {
    SendEmail(data);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah yakin ingin menghapus data tersebut?")) {
      DeletePerson(id)
        .then(() => alert("Data berhasil dihapus"))
        .then(() => (window.location.href = "/#/admin/kontrak-pegawai"))
        .finally(() => {
          GetPersonData()
            .then((response) => setPerson(response.data.data))
            .finally(() => setLoading(false));
        });
    }
  };
  // * end method for person

  const objValue = {
    person,
    dataPersonId,
    modalStatus,
    loading,
    addPerson,
    editPerson,
    deletePerson,
    handleAdd,
    handleEdit,
    handleDelete,
    sendEmail,
  };

  return (
    <PersonContext.Provider value={objValue}>{children}</PersonContext.Provider>
  );
};

export { PersonContext, PersonProvider };

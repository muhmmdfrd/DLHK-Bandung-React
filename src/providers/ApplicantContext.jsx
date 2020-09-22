import React, { createContext, useEffect, useState } from "react";
import {
  GetApplicant,
  GetApplicantId,
  DeletePerson,
} from "../Services/PersonService";

const ApplicantContext = createContext();

const ApplicantProvider = ({ children }) => {
  const [applicant, setApplicant] = useState([]);
  const [appId, setAppId] = useState({});
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState("");

  // * method
  const loadText = (id) => window.$(`#span-btns-${id}`).text("loading...");
  const defaultText = (id) => window.$(`#span-btns-${id}`).text("Detail");
  const showModal = () => window.$("#addEmployeeModal").modal("toggle");
  const hideModal = () => window.$("#addEmployeeModal").modal("hide");
  const showImage = () => window.$("#imageModal").modal("toggle");
  const showInterview = () => window.$("#interviewModal").modal("toggle");

  const detail = (id) => {
    loadText(id);
    GetApplicantId(id)
      .then((response) => setAppId(response.data.data))
      .finally(() => {
        defaultText(id);
        showModal();
      });
  };

  const zoomImage = (document) => {
    showImage();
    setFile(document);
  };

  const deletePerson = (id) => {
    if (window.confirm("Apakah yakin ingin menolak pelamar?")) {
      DeletePerson(id)
        .then(() => alert("berhasil dihapus"))
        .finally(() =>
          GetApplicant()
            .then((response) => setApplicant(response.data.data))
            .finally(() => setLoading(false))
        );
    }
  };

  const interview = (id) => {
    hideModal();
    GetApplicantId(id)
      .then((response) => setAppId(response.data.data))
      .finally(() => showInterview());
  };

  useEffect(() => {
    setInterval(() => {
      GetApplicant()
        .then((response) => setApplicant(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  const objectValue = {
    applicant,
    appId,
    file,
    loading,
    detail,
    zoomImage,
    interview,
    deletePerson,
  };

  return (
    <ApplicantContext.Provider value={objectValue}>
      {children}
    </ApplicantContext.Provider>
  );
};

export { ApplicantProvider, ApplicantContext };

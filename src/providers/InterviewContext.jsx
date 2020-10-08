import React, { createContext, useState, useEffect } from "react";
import {
  GetInterviewData,
  GetInterviewDataId,
  AddInterview,
  DeleteInterview,
} from "../Services/InterviewService";

const InterviewContext = createContext();

const InterviewProvider = ({ children }) => {
  const [interview, setInterview] = useState([]);
  const [interviewId, setInterviewId] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetInterviewData()
        .then((response) => setInterview(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  const addInterview = (data) => {
    AddInterview(data)
      .then(() => alert("berhasil membuat jadwal interview"))
      .then(() => window.$("#interviewModal").modal("hide"))
      .finally(() => {
        GetInterviewData()
          .then((response) => setInterview(response.data.data))
          .finally(() => setLoading(false));
      });
  };

  const detail = (id) => {
    GetInterviewDataId(id)
      .then((response) => setInterviewId(response.data.data))
      .finally(() => setLoading(false));
  };

  const deleteInterview = (id) => {
    DeleteInterview(id).then(() => {
      GetInterviewData()
        .then((response) => setInterview(response.data.data))
        .finally(() => setLoading(false));
    });
  };

  const objValue = {
    interview,
    interviewId,
    loading,
    addInterview,
    detail,
    deleteInterview,
  };

  return (
    <InterviewContext.Provider value={objValue}>
      {children}
    </InterviewContext.Provider>
  );
};

export { InterviewProvider, InterviewContext };

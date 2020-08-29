import React, { createContext, useState, useEffect } from 'react';
import {
  GetInterviewData,
  GetInterviewDataId,
  AddInterview,
} from '../Services/InterviewService';

const InterviewContext = createContext();

const InterviewProvider = ({ children }) => {
  const [interview, setInterview] = useState([]);
  const [interviewId, setInterviewId] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetInterviewData()
      .then((response) => setInterview(response.data.data))
      .finally(() => setLoading(false));
  }, [interview]);

  const addInterview = (data) => {
    AddInterview(data)
      .then(() => alert('berhasil membuat jadwal interview'))
      .finally(() => window.$('#interviewModal').modal('hide'));
  };

  const detail = (id) => {
    GetInterviewDataId(id)
      .then((response) => setInterviewId(response.data.data))
      .finally(() => setLoading(false));
  };

  const objValue = { interview, interviewId, loading, addInterview, detail };

  return (
    <InterviewContext.Provider value={objValue}>
      {children}
    </InterviewContext.Provider>
  );
};

export { InterviewProvider, InterviewContext };

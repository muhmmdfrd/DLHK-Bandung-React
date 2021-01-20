import React, { createContext, useState } from "react";
import {
  GetPresenceDetail,
  GetPresenceResumeFilter,
  GetPerformResumeFilter,
} from "../Services/PresenceService";

const PresenceContext = createContext();

const PresenceProvider = ({ children }) => {
  const [presence, setPresence] = useState([]);
  const [detail, setDetail] = useState([]);
  const [presenceZone] = useState([]);
  const [presenceRegion] = useState([]);
  const [perform, setPerform] = useState([]);
  const [performZone] = useState([]);
  const [performRegion] = useState([]);
  const [liveZone] = useState([]);
  const [livePerform] = useState([]);
  const [loading, setLoading] = useState(true);

  // * additional
  const [loc, setLoc] = useState("");
  const [stat, setStat] = useState("");
  const [file, setFile] = useState("");

  const handleDetail = (status, zone) => {
    setLoc(zone);
    setStat(status);
    GetPresenceDetail(status, zone)
      .then((response) => setDetail(response.data.data))
      .finally(() => window.$("#detailModal").modal("toggle"));
  };

  const handleFile = (data) => {
    setFile(data);
  };

  const handleFilter = (start, end) => {
    GetPresenceResumeFilter(start, end)
      .then((response) => setPresence(response.data.data))
      .finally(() => setLoading(false));
  };

  const handlePerformFilter = (start, end) => {
    GetPerformResumeFilter(start, end)
      .then((response) => setPerform(response.data.data))
      .finally(() => setLoading(false));
  };

  const objectValue = {
    presence,
    presenceZone,
    presenceRegion,
    perform,
    performZone,
    performRegion,
    liveZone,
    livePerform,
    detail,
    handleDetail,
    handleFile,
    handleFilter,
    handlePerformFilter,
    loc,
    stat,
    file,
    loading,
  };

  return (
    <PresenceContext.Provider value={objectValue}>
      {children}
    </PresenceContext.Provider>
  );
};

export { PresenceContext, PresenceProvider };

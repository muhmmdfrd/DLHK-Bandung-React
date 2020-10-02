import React, { createContext, useEffect, useState } from "react";
import {
  GetPresenceResume,
  GetPresenceZone,
  GetPresenceRegion,
  GetPerformResume,
  GetPerformZone,
  GetPerformRegion,
  GetLiveZone,
  GetPerformLiveZone,
  GetPresenceDetail,
  GetPresenceResumeFilter,
  GetPerformResumeFilter,
} from "../Services/PresenceService";

const PresenceContext = createContext();

const PresenceProvider = ({ children }) => {
  const [presence, setPresence] = useState([]);
  const [detail, setDetail] = useState([]);
  const [presenceZone, setPresenceZone] = useState([]);
  const [presenceRegion, setPresenceRegion] = useState([]);
  const [perform, setPerform] = useState([]);
  const [performZone, setPerformZone] = useState([]);
  const [performRegion, setPerformRegion] = useState([]);
  const [liveZone, setLiveZone] = useState([]);
  const [livePerform, setLivePerform] = useState([]);
  const [loading, setLoading] = useState(true);

  // * additional
  const [loc, setLoc] = useState("");
  const [stat, setStat] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    GetPresenceResume()
      .then((response) => setPresence(response.data.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPerformLiveZone()
        .then((response) => setLivePerform(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  useEffect(() => {
    GetPerformResume()
      .then((response) => setPerform(response.data.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPresenceZone()
        .then((response) => setPresenceZone(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPresenceRegion()
        .then((response) => setPresenceRegion(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPerformZone()
        .then((response) => setPerformZone(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPerformRegion()
        .then((response) => setPerformRegion(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetLiveZone()
        .then((response) => setLiveZone(response.data.data))
        .finally(() => setLoading(false));
    }, 20000);
  }, []);

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

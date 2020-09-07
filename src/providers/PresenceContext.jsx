import React, { createContext, useEffect, useState } from 'react';
import {
  GetPresenceResume,
  GetPresenceZone,
  GetPresenceRegion,
  GetPerformResume,
  GetPerformZone,
  GetPerformRegion,
  GetLiveZone,
  GetPerformLiveZone,
} from '../Services/PresenceService';

const PresenceContext = createContext();

const PresenceProvider = ({ children }) => {
  const [presence, setPresence] = useState([]);
  const [presenceZone, setPresenceZone] = useState([]);
  const [presenceRegion, setPresenceRegion] = useState([]);
  const [perform, setPerform] = useState([]);
  const [performZone, setPerformZone] = useState([]);
  const [performRegion, setPerformRegion] = useState([]);
  const [liveZone, setLiveZone] = useState([]);
  const [livePerform, setLivePerform] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetPresenceResume()
        .then((response) => setPresence(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPerformLiveZone()
        .then((response) => setLivePerform(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPerformResume()
        .then((response) => setPerform(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPresenceZone()
        .then((response) => setPresenceZone(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPresenceRegion()
        .then((response) => setPresenceRegion(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetPerformZone()
        .then((response) => setPerformZone(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  useEffect(() => {
   setInterval(() => {
    GetPerformRegion()
      .then((response) => setPerformRegion(response.data.data))
      .finally(() => setLoading(false));
   }, 10000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      GetLiveZone()
        .then((response) => setLiveZone(response.data.data))
        .finally(() => setLoading(false));
    }, 10000);
  }, []);

  const objectValue = {
    presence,
    presenceZone,
    presenceRegion,
    perform,
    performZone,
    performRegion,
    liveZone,
    livePerform,
    loading,
  };

  return (
    <PresenceContext.Provider value={objectValue}>
      {children}
    </PresenceContext.Provider>
  );
};

export { PresenceContext, PresenceProvider };

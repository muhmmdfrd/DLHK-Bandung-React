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
    GetPresenceResume()
      .then((response) => setPresence(response.data.data))
      .finally(() => setLoading(false));
  }, [presence]);

  useEffect(() => {
    GetPerformLiveZone()
      .then((response) => setLivePerform(response.data.data))
      .finally(() => setLoading(false));
  }, [livePerform]);

  useEffect(() => {
    GetPerformResume()
      .then((response) => setPerform(response.data.data))
      .finally(() => setLoading(false));
  }, [perform]);

  useEffect(() => {
    GetPresenceZone()
      .then((response) => setPresenceZone(response.data.data))
      .finally(() => setLoading(false));
  }, [presenceZone]);

  useEffect(() => {
    GetPresenceRegion()
      .then((response) => setPresenceRegion(response.data.data))
      .finally(() => setLoading(false));
  }, [presenceRegion]);

  useEffect(() => {
    GetPerformZone()
      .then((response) => setPerformZone(response.data.data))
      .finally(() => setLoading(false));
  }, [performZone]);

  useEffect(() => {
    GetPerformRegion()
      .then((response) => setPerformRegion(response.data.data))
      .finally(() => setLoading(false));
  }, [performRegion]);

  useEffect(() => {
    GetLiveZone()
      .then((response) => setLiveZone(response.data.data))
      .finally(() => setLoading(false));
  }, [liveZone]);

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

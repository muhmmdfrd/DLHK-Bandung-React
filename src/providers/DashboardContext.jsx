import React, { createContext, useEffect, useState } from 'react';
import { GetDashboardPresence } from '../Services/DashboardService';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
    const [presence, setPresence] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetDashboardPresence()
            .then((response) => setPresence(response.data.data))
            .finally(() => setLoading(false));
    }, []);

    const objValue = {
        presence,
        loading
    };

    return (
        <DashboardContext.Provider value={objValue}>
            {children}
        </DashboardContext.Provider>);
}

export { DashboardContext, DashboardProvider };
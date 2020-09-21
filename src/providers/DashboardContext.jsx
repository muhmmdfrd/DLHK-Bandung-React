import React, { createContext, useEffect, useState } from 'react';
import { GetDashboardContract, GetDashboardItem, GetDashboardPresence } from '../Services/DashboardService';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
    const [presence, setPresence] = useState([]);
    const [item, setItem] = useState([]);
    const [contract, setContract] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetDashboardPresence()
            .then((response) => setPresence(response.data.data))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        GetDashboardItem()
            .then((response) => setItem(response.data.data))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        GetDashboardContract()
            .then((response) => setContract(response.data.data))
            .finally(() => setLoading(false));
    }, []);

    const objValue = {
        presence,
        item,
        contract,
        loading
    };

    return (
        <DashboardContext.Provider value={objValue}>
            {children}
        </DashboardContext.Provider>);
}

export { DashboardContext, DashboardProvider };
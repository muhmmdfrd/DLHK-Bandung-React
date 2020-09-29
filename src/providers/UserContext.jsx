import React, { createContext, useEffect, useState } from "react";
import { GetUser, AddUser } from "../Services/UserService";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      GetUser()
        .then((response) => {
          setUser(response.data.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 20000);
  }, []);

  const addUser = (data) => {
    AddUser(data)
      .then(() => console.log("waiting"))
      .finally(() => setLoading(false));
  };

  const objValue = {
    user,
    loading,
    addUser,
  };

  return (
    <UserContext.Provider value={objValue}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };

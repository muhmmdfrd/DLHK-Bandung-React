import React, { createContext, useState, useEffect } from 'react';
import { GetUserData } from '../Services/UserService';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEdit = (id) => {
    alert(`edit ${id}`);
  };

  const handleDelete = (id) => {
    alert(`delete ${id}`);
  };

  useEffect(() => {
    GetUserData()
      .then((response) => {
        setUser(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const objValue = {
    user,
    loading,
    handleEdit,
    handleDelete,
  };

  return (
    <UserContext.Provider value={objValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

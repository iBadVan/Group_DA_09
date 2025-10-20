import { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null, 
};

export const UserProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const login = (userData) => {
    setState({ isAuthenticated: true, user: userData });
  };

  const logout = () => {
    setState(initialState);
  };

  const value = useMemo(() => ({ state, login, logout }), [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser debe usarse dentro de <UserProvider>');
  return ctx;
};

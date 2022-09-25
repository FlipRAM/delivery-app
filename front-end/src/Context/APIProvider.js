import { PropTypes } from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { saveUserOnLocalStorage } from './LocalStorage';

export const useAppContext = createContext({});
export function UseAppContextProvider({ children }) {
  const [productsList, setProductsList] = useState(undefined);
  const [userData, setUserData] = useState({});
  const [userLog, setUserLog] = useState();

  useEffect(() => {
    if (userData.data) {
      saveUserOnLocalStorage('user', userData.data);
      saveUserOnLocalStorage('token', userData.data.token);
      setUserLog(userData.data);
    }
  }, [userData.data]);

  const props = useMemo(() => ({
    userLog,
    setUserData,
    productsList,
    setProductsList,
  }), [productsList, userLog]);

  return (
    <useAppContext.Provider value={ props }>
      {children}
    </useAppContext.Provider>
  );
}

UseAppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

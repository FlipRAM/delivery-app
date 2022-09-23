import { PropTypes } from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { saveUserOnLocalStorage } from './LocalStorage';

export const useAppContext = createContext({});
export function UseAppContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [productsList, setProductsList] = useState(undefined);
  const [userLog, setUserLog] = useState();

  useEffect(() => {
    if (userData.data) {
      saveUserOnLocalStorage(userData.data);
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

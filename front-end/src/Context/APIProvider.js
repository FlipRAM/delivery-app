import { PropTypes } from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { saveUserOnLocalStorage } from './LocalStorage';

export const useAppContext = createContext({});
export function UseAppContextProvider({ children }) {
  const [productsList, setProductsList] = useState(undefined);
  const [userData, setUserData] = useState({});
  const [userLog, setUserLog] = useState();
  const [userList, setUserList] = useState(undefined);

  useEffect(() => {
    if (userData.data) {
      saveUserOnLocalStorage('user', userData.data);
      setUserLog(userData.data);
    }
  }, [userData.data]);

  const props = useMemo(() => ({
    userLog,
    setUserData,
    productsList,
    setProductsList,
    userList,
    setUserList,
  }), [productsList, userList, userLog]);

  return (
    <useAppContext.Provider value={ props }>
      {children}
    </useAppContext.Provider>
  );
}

UseAppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

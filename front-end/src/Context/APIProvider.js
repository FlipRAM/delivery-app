import { PropTypes } from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { saveUserOnLocalStorage } from './LocalStorage';

export const useAppContext = createContext({});
export function UseAppContextProvider({ children }) {
  const [productsList, setProductsList] = useState(undefined);
  const [userData, setUserData] = useState({});
  const [userLog, setUserLog] = useState();
  const [totalPrice, setTotalPrice] = useState('0,00');

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
    totalPrice,
    setTotalPrice,
  }), [productsList, totalPrice, userLog, setTotalPrice]);

  return (
    <useAppContext.Provider value={ props }>
      {children}
    </useAppContext.Provider>
  );
}

UseAppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

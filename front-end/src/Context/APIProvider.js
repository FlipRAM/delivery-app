import { createContext, useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';

export const useAppContext = createContext({});

export function UseAppContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  const props = useMemo(() => ({ setUserData, userData }), [userData]);

  return (
    <useAppContext.Provider value={ props }>
      {children}
    </useAppContext.Provider>
  );
}

UseAppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

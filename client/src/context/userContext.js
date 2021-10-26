import React, { useEffect, useState } from 'react';
import { element } from 'prop-types';

import { updateLocalStorage } from '../utils/helpers';
import { userByToken } from '../services/api';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    updateLocalStorage('token', { token });
    userByToken(token, setUser);
  }, [token]);
  
  return (
    <UserContext.Provider value={ {name: 'Adelino', token, setToken: setToken, user} }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: element,
};
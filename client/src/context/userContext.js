import React, { useState } from 'react';
import { element } from 'prop-types';

const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState();
  
  return (
    <UserContext.Provider value={ {name: 'Adelino', token, setToken} }>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: element,
};
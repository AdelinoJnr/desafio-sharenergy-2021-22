import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Factory from './pages/Factory';
import Participation from './pages/Participation';

import { UserProvider } from './context/userContext';

function App() {
  return (
    <>
      <UserProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/participation" component={Participation} />
          <Route path="/factory/:id" component={Factory} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </UserProvider>
    </>
  );
}

export default App;

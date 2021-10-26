import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Factory from './pages/Factory';
import Participation from './pages/Participation';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/participation" component={Participation} />
        <Route path="/factory/:id" component={Factory} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;

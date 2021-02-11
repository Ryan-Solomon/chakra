import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

export const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/form'>
          <FormPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;

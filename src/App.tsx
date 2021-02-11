import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { CardPage } from './pages/CardPage';
import { ListPage } from './pages/ListPage';

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
        <Route exact path='/card'>
          <CardPage />
        </Route>
        <Route exact path='/list'>
          <ListPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;

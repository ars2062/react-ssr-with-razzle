import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';


import './App.css';
import DashboardPage from './Pages/DashboardPage';
import PostsPage from './Pages/PostsPage';

const App = () => (
  <Switch>
  <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/dash" component={DashboardPage} />
    <Route exact={true} path="/post" component={PostsPage} />
  </Switch>
);

export default App;

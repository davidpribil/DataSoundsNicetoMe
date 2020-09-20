import { render } from "react-dom";
import React, { Component } from 'react';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import PanelHomePage from './pages/PanelHomePage';
import HistoryPage from './pages/HistoryPage';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

export const  App = () =>  {
    return (
      <div className="App">
         <BrowserRouter>
            <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={PanelHomePage} />
            <Route exact path="/history" component={HistoryPage} />
            <Redirect from="*" to="/404" />
            </Switch>
            </BrowserRouter>
      </div>
    );
}


export default App;
const container = document.getElementById("app");
render(<App />, container);
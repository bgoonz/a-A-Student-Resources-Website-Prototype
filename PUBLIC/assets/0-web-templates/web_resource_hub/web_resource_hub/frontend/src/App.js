import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Blank from "./components/Blank/Blank";

import Grid from "./components/Grid/Grid";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Blank } />
          <Route path = "/Grid" component = { Grid } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;

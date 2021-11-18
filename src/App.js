import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Login/Account";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route path="/account">
          <Account></Account>
        </Route>
        <Route path="/">
          <Login></Login>
        </Route>
        <Route exact path="/book">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

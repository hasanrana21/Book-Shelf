import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Login/Account";
import PlaceOrder from "./components/PlaceOrderPage/PlaceOrder";
import AddToCart from "./components/PlaceOrderPage/AddToCart";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route path="/account">
          <Account></Account>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/place-order/:id">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="/add-to-cart">
          <AddToCart></AddToCart>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

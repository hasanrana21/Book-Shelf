import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Login/Account";
import PlaceOrder from "./components/PlaceOrderPage/PlaceOrder";
import AddToCart from "./components/PlaceOrderPage/AddToCart";
import ShippingPage from "./components/PlaceOrderPage/ShippingPage";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Switch>
        <Route path="/account">
          <Account/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/place-order/:id">
          <PlaceOrder/>
        </Route>
        <Route path="/add-to-cart">
          <AddToCart/>
        </Route>
        <Route path="/shipping-page">
          <ShippingPage/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

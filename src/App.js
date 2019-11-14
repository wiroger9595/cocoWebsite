import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/products/:slug" component={SingleProducts} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;


import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import About_Us from "./pages/About_Us";
import Message from "./pages/Message";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About_Us} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/products/:slug" component={SingleProducts} />
        <Route exact path="/message/" component={Message} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;


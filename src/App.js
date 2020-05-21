import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/pic" component={photosList} /> */}
        {/* <Route component={Default} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

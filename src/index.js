import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Login from "./Login/Login";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Route path="/login" component={Login} />
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import LoginSeparatedButtons from "./LoginSeparatedButtons";
import Login from "./Login";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Route path="/login" component={Login} />
      <Route path="/login2" component={LoginSeparatedButtons} />
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

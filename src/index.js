import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import LoginSeparatedButtons from "./LoginSeparatedButtons";
import LoginHoc from "./LoginHoc";
import Login from "./Login";
import LoginRecompose from "./LoginRecompose";
import LoginRenderProps from "./LoginRenderProps";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Route path="/login" component={Login} />
      <Route path="/login2" component={LoginSeparatedButtons} />
      <Route path="/login3" component={LoginHoc} />
      <Route path="/login4" component={LoginRecompose} />
      <Route path="/login5" component={LoginRenderProps} />
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

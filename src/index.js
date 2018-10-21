import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Route path="/login" component={Login} />
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

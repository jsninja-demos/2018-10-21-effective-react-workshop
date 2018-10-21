import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/create";

import Login from "./Login/Login";
import List from "./List/List";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Route path="/login" component={Login} />
        <Route path="/list" component={List} />
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

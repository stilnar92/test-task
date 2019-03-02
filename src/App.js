import React from "react";
import { BrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";
import { Routes } from "./routes";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Helmet titleTemplate="Agent Management" />
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  );
};

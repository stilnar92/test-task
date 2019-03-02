import React from "react";
import ReactDom from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "./App";
import { configureStore } from "./store";
import { getAccessToken, getRefreshToken } from "./modules/auth/utils";
import jwtDecode from "jwt-decode";
import { loginUser } from "./modules/auth/effects";

const rootElement = document.getElementById("root");
const store = configureStore(window.initialStore || {});

const accessToken = getAccessToken();
const refreshToken = getRefreshToken();

if (accessToken) {
  try {
    const payload = {
      username: jwtDecode(accessToken).username,
      accessToken: accessToken,
      refreshToken: refreshToken
    };
    store.dispatch(loginUser(payload));
  } catch (e) {}
}

const render = () => {
  ReactDom.render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
    rootElement
  );
};

render();

import jwtDecode from "jwt-decode";

import { setAuthData } from "../utils";
import { actions } from "../reducers";

export const AUTH_LOGIN_URL = "/auth/session";
const mock_api = true;

export const loginUser = ({ username, password }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.login.start());

  try {
    const auth = await api.post(mock_api, AUTH_LOGIN_URL, {
      username,
      password
    });
    if (auth.error) {
      await dispatch(actions.login.failed(auth.error));
      return false;
    } else {
      setAuthData({
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken
      });
      await dispatch(
        actions.login.finish({
          username: jwtDecode(auth.accessToken).username,
          accessToken: auth.accessToken,
          refreshToken: auth.refreshToken
        })
      );
      return true;
    }
  } catch (error) {
    return false;
  }
};

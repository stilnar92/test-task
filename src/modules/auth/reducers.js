import { LOADING } from "../../constants";
import { createSymbiote } from "redux-symbiote";

const initialState = {
  status: LOADING.initial,
  error: null,
  username: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false
};

export const { actions, reducer: auth } = createSymbiote(
  initialState,
  {
    login: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, auth) => ({
        ...state,
        status: LOADING.ready,
        username: auth.username,
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        isAuthenticated: true
      })
    },
    register: {
      start: state => ({
        ...state,
        status: LOADING.loading
      }),
      failed: (state, error) => ({
        ...state,
        error,
        status: LOADING.failed
      }),
      finish: (state, auth) => ({
        ...state,
        status: LOADING.ready,
        username: auth.username,
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        isAuthenticated: true
      })
    },
    logout: (state, auth) => ({
      status: LOADING.initial,
      username: "",
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false
    })
  },
  "auth"
);

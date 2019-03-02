import { clearAuthData } from "../utils";
import { actions } from "../reducers";

export const logout = history => async (dispatch, getState, { api }) => {
  clearAuthData();
  dispatch(actions.logout());
};

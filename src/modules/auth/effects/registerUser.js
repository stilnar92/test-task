import { actions } from "../reducers";

export const AUTH_REGISTER_URL = "/auth/create";
const mock_api = true;

export const registerUser = ({ username, password }) => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch(actions.register.start());

  try {
    const auth = await api.post(mock_api, AUTH_REGISTER_URL, {
      username,
      password
    });
    if (auth.error) {
      await dispatch(actions.register.failed(auth.error));
      return false;
    } else {
      await dispatch(
        actions.register.finish({
          username: auth.username
        })
      );
      return true;
    }
  } catch (error) {
    return false;
  }
};

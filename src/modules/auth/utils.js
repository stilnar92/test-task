import Cookies from "browser-cookies";

export const getAccessToken = () => {
  return Cookies.get("accessToken");
};

export const getRefreshToken = () => {
  return Cookies.get("refreshToken");
};

export const setAuthData = ({ accessToken, refreshToken }) => {
  Cookies.set("accessToken", accessToken);
  Cookies.set("refreshToken", refreshToken);
};

export const clearAuthData = () => {
  Cookies.erase("accessToken");
  Cookies.erase("refreshToken");
};

import axios from "axios";

export const setAuthorizationHeader = (accessToken: string) => {
  // set authorization header to axios request
  axios.interceptors.request.use((config) => {
    config.withCredentials = true;
    // header
    if (typeof config.headers === "undefined") {
      config.headers = {};
    }

    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  });
};

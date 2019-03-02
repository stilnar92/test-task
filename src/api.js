import Cookies from "browser-cookies";

export class Api {
  constructor(serverUri, defaultOptions) {
    this.baseUri = serverUri;
    this.options = defaultOptions;
  }

  request(method, url, options, mock_mode = false) {
    const token = Cookies.get("accessToken");
    const Authorization =
      !mock_mode && token ? { Authorization: `token ${token}` } : {};
    const fullOptions = {
      credentials: "same-origin",
      method,
      headers: {
        ...Authorization,
        ...options.headers
      },
      ...this.options,
      ...options
    };
    return fetch(`${this.baseUri}${url}`, fullOptions).then(response => {
      return response.json();
    });
  }

  /**
   * @param {string} url
   * @param {object} [options]
   * @return {Promise<T>}
   */
  get(mock = false, url, options) {
    return mock
      ? this.request("GET", `/mock/api${url}.json`, options, true)
      : this.request("GET", url, options);
  }

  /**
   * @param {string} url
   * @return {Promise<T>}
   */
  post(mock = false, url, body, options) {
    const fullOptions = Object.assign({}, { body }, options);

    return mock
      ? this.request("GET", `/mock/api${url}.json`, fullOptions, true)
      : this.request("POST", url, fullOptions);
  }

  /**
   * @param {string} url
   * @return {Promise<T>}
   */
  delete(url, body, options) {
    const fullOptions = Object.assign({}, { body }, options);

    return this.request("DELETE", url, fullOptions);
  }
}

import axios from "axios";
import { getAccessToken } from "./jwt-token-access/accessToken";
// import { api } from "../config";

axios.defaults.baseURL = "";
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const authUser: any = getAccessToken('KEY')
const token = authUser ? authUser : null;
if (token) axios.defaults.headers.common["token"] = token;

// intercepting to capture errors
axios.interceptors.response.use(
	function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
		switch (error?.response?.status) {
      case 500:
				message = error?.response;
        break;
      case 401:
				message = error?.response;
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
			}
			return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: any) => {
  axios.defaults.headers.common["token"] =  token;
};

const getLoggedUser = () => {

	const user = localStorage.getItem("authUser");
	if (!user) {
		return null;
	} else {
		return JSON.parse(user);
	}
};


/**
 * setup Axios
 */
class APIClient {
  /**
   * Fetches data from given url
   */

  get = (url: any, params: any) => {
    let response;

    let paramKeys: any = [];

    if (params) {
      Object.keys(params).map(key => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url: any, data: any) => {
    return axios.post(url, data)
  };
  /**
   * Updates data
   */
  update = (url: any, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: any, data: any) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url: any, config: any) => {
    return axios.delete(url, { ...config });
  };
}


export { APIClient, setAuthorization, getLoggedUser };

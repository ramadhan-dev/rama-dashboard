import axios from "axios";
import { getAccessToken } from "./jwt-token-access/accessToken";
import { ACCESS_KEY } from "#/Common/constants/env";
import secureLocalStorage from "react-secure-storage";
axios.defaults.baseURL = "";

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const authUser: any = getAccessToken(ACCESS_KEY)
const token = authUser ? authUser : null;
if (token) axios.defaults.headers.common["token"] = token;

// intercepting to capture errors
axios.interceptors.response.use(
	function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger

		if (error?.response?.status === 401 && error?.response?.data?.data === 'Token is not valid'){
			secureLocalStorage.clear()
			window.location.href = '/'
		} else {
			let message;
			switch (error?.response?.status) {
				case 500:
					message = error?.response;
					break;
				case 401:
					message = error?.response;
					break;
				case 404:
				case 400:
				case 409:
					message = error?.response?.data;
					break;
				default:
					message = error.message || error;
			}
			return Promise.reject(message);
		}

  }
);


/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: any) => {
  axios.defaults.headers.common["token"] =  token;
};


/**
 * setup Axios
 */
class APIClient {


	/**
	 * @description
	 * @param url
	 * @param params
	 * @returns
	 */
  get = (url: any, params: any) => {
    let response;

    let paramKeys: any = [];

		if (params && typeof (params) === 'object') {
      Object.keys(params).map(key => {
				if (key === 'pagination') {
					paramKeys.push("pageIndex" + '=' +String(params[key]?.pageIndex || 1));
					paramKeys.push("pageSize" + '=' + String(params[key]?.pageSize || 10));
				} else if (key === 'filter' || key === 'sort') {
					if (params[key]?.length > 0) {

					}
				} else {
					paramKeys.push(key + '=' + params[key]);

				}

        return paramKeys;
      });


			const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
			response = axios.get(`${url}?${queryString}`, params);

		} else if (typeof (params) === 'string'){
			response = axios.get(`${url}/${params}`);

		} else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };


	/**
	 * @description
	 * @param url
	 * @param data
	 * @returns
	 */
  create = (url: any, data: any) => {
    return axios.post(url, data)
  };


	/**
	 * @description
	 * @param url
	 * @param data
	 * @returns
	 */
  update = (url: any, data: any) => {
    return axios.patch(url, data);
  };


	/**
	 * @description
	 * @param url
	 * @param data
	 * @returns
	 */
  put = (url: any, data: any) => {
    return axios.put(url, data);
  };



	/**
	 * @description
	 * @param url
	 * @param config
	 * @returns
	 */
  delete = (url: any, config: any) => {
    return axios.delete(url, { ...config });
  };
}


export { APIClient, setAuthorization };

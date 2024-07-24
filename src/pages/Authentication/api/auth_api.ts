import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";

export const POST_LOGIN = API_URL + "/auth/login";
export const POST_REGISTER = API_URL + "/auth/register";

const api = new APIClient();


export const Login = (data: any) => api.create(POST_LOGIN, data);
export const Register = (data: any) => api.create(POST_REGISTER, data);

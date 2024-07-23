import { loginError, loginSuccess, logoutSuccess } from "./reducer";
import { Dispatch } from "redux";
import { Login } from "#/helpers/apis/auth/auth_api";
import { removeAccessToken, setAccessToken } from "#/helpers/jwt-token-access/accessToken";
import { setAuthorization } from "#/helpers/api_helper";

interface User {
	email: string;
	password: string;
}

export const loginUser = (user: User, history: any) => async (dispatch: Dispatch) => {
	try {
		let response: any;
		response = await Login({
			email: user.email,
			password: user.password,
		})
			.then((data: any) => {
				setAccessToken('KEY', data?.token)
				setAuthorization(data?.token)
				return data;
			})



		if (response) {
			dispatch(loginSuccess(response));
			history("/dashboard");
		}
	} catch (error: any) {
		dispatch(loginError(error?.data?.data));
	}
};


/**
 *
 * @returns
 */
export const logoutUser = () => async (dispatch: Dispatch) => {
	try {
		removeAccessToken('KEY');
		dispatch(logoutSuccess(true));
	} catch (error) {
		dispatch(loginError(error));
	}
}


/**
 *
 * @param type
 * @param history
 * @returns
 */
export const socialLogin = (type: any, history: any) => async (dispatch: any) => {
	try {

	} catch (error) {
		dispatch(loginError(error));
	}
}

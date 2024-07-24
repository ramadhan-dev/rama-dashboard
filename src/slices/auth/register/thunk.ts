import { ThunkAction } from "redux-thunk";
// import { RootState } from "#/slices";
import { Action, Dispatch } from "redux";
import { registerFailed, registerSuccess, resetRegister } from "./reducer";
import { User } from "#/interfaces/common";
// import { Register } from "#/helpers/apis/auth/auth_api";



export const registerUser = (user: User ) => async (dispatch: Dispatch) => {
    try {
				let response: any;
				// response = await Register(user);

        if (response) {
            dispatch(registerSuccess(response));
        }
    } catch (error:any) {
			dispatch(registerFailed(error?.data?.data));
    }
};

export const resetRegisterFlag = () => {
    try {
        const response = resetRegister(false);
        return response;
    } catch (error) {
        return error;
    }
};

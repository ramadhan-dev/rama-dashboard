import { Dispatch } from "redux";
import { registerFailed, registerSuccess, resetRegister } from "./reducer";



export const registerUser = () => async (dispatch: Dispatch) => {
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

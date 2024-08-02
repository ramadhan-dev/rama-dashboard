import { profileFailed, profileSuccess } from "./reducer"
import { Dispatch } from "redux";

export const editProfile = () => async (dispatch: Dispatch) => {
    try {
        let response: any;

        if (response) {
            dispatch(profileSuccess(response))
        }

    } catch (error) {
        dispatch(profileFailed(error))
    }
}

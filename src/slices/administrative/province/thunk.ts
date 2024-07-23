import { setError, setStatus } from "./reducer";
import { Dispatch } from "redux";
import { Province } from "#/interfaces/common";
import { AddNewProvince } from "#/helpers/apis/administrative/administrative";



export const CreateProvince = (data: Province) => async (dispatch: Dispatch) => {
	try {
		let response: any;
		response = await AddNewProvince(data);


		if (response) {
			dispatch(setStatus('success'));
		}
	} catch (error: any) {
		dispatch(setError(error?.data?.data));
	}
};

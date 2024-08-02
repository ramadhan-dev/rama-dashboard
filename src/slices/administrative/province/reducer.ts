import { Province } from "#/interfaces/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
	data: Province;
	error: string;
	success: boolean;
}

const initialState: LoginState = {
	data: {
		code:'',
		name:''
	},
	error: "",
	success: false,
};

const ProvinceSlice = createSlice({
	name: "province",
	initialState,
	reducers: {
		setStatus(state: LoginState) {
			state.success = true;
		},
		setError(state: LoginState, action: PayloadAction<string | any>) {
			state.error = action.payload;
			state.success = false;
		},
	},
});

export const { setStatus, setError } = ProvinceSlice.actions;
export default ProvinceSlice.reducer;

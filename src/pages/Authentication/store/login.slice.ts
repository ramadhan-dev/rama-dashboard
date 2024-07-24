import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doLogin, RegisterUser } from "./login.asyncAction";
import { removeAccessToken, setAccessToken } from "#/helpers/jwt-token-access/accessToken";
import { setAuthorization } from "#/helpers/api_helper";
import { Profile } from "#/interfaces/common";
import { ACCESS_KEY } from "#/Common/constants/env";



interface LoginState {
	user: Profile | undefined;
	loading: boolean;
	error: string | undefined;
	success: boolean;
	loginSuccess: boolean;
	isUserLogout: boolean;
}

const initialState: LoginState = {
	user: undefined,
	error: "",
	success: false,
	loginSuccess: false,
	isUserLogout: false,
	loading: false
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setLogoutUser(state: LoginState, action: PayloadAction<boolean>) {
			removeAccessToken(ACCESS_KEY);
			state.isUserLogout = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(doLogin.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(doLogin.fulfilled, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.success = true;
				state.loginSuccess = true;
				state.user = payload?.user
				setAccessToken(ACCESS_KEY, payload?.token)
				setAuthorization(payload?.token)
			})
			.addCase(doLogin.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.error = payload?.data || payload;
			})
			.addCase(RegisterUser.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(RegisterUser.fulfilled, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.success = true;
				state.user = payload?.data
			})
			.addCase(RegisterUser.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.error = payload?.data || payload;
			})
	},
});

// export default loginSlice.reducer;

export const { reducer: loginReducer, actions: loginAction } = loginSlice;

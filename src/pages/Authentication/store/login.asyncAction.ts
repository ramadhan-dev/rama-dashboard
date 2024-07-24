import { Login, Register } from "./../api/auth_api";
import { User } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";


/**
 * API Login
 */
interface loginProp  {
	email:string
	password:string
	role:string
}
export const doLogin = createAsyncThunk('login', async (user: loginProp, { rejectWithValue }) => {
	try {
		return await Login({ email: user.email, password: user.password})
	} catch (error:any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});


/**
 * API Register
 */
export const RegisterUser = createAsyncThunk('register', async (user: User, { rejectWithValue }) => {
	try {
		return await Register(user)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});


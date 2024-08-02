import { AddNewProvince, AllProvince } from './../api/province_api'
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";


/**
 * API Login
 */
export const createNewProvince = createAsyncThunk('addNewProvince', async (data: masterAdministrative, { rejectWithValue }) => {
	try {
		return await AddNewProvince(data)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});


/**
 * API Register
 */
export const getAllProvince = createAsyncThunk('register', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		return await AllProvince(payload)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});


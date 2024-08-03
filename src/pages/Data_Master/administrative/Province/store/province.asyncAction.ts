import { AddNewProvince, AllProvince, deleteProvinceApi, OneProvince, updateProvinceApi } from './../api/province_api'
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
export const getAllProvince = createAsyncThunk('getAllProvince', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		return await AllProvince(payload)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});


/**
 * API Register
 */
export const getOneProvince = createAsyncThunk('getOneProvince', async (payload:string , { rejectWithValue }) => {
	try {
		return await OneProvince(payload)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProvince = createAsyncThunk('updateProvince', async (data: UploadProps, { rejectWithValue }) => {
	try {
		return await updateProvinceApi(data)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});



/**
 * API Register
 */
export const deleteProvince = createAsyncThunk('deleteProvince', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		return await deleteProvinceApi(payload)
	} catch (error: any) {
		return rejectWithValue(error?.data || error); // Mengembalikan pesan error
	}
});

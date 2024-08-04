import { AddNewProvince, AllProvince, deleteProvinceApi, OneProvince, updateProvinceApi } from './../api/province_api'
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewProvince = createAsyncThunk('addNewProvince', async (data: masterAdministrative, { rejectWithValue }) => {
	try {
		const response =  await AddNewProvince(data)
		toast.success("Event Added Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Added Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getAllProvince = createAsyncThunk('getAllProvince', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllProvince(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneProvince = createAsyncThunk('getOneProvince', async (payload:string , { rejectWithValue }) => {
	try {
		const response =  await OneProvince(payload)
		toast.success("Event Get Province Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get Province Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
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
		const response =  await updateProvinceApi(data)
		toast.success("Event Update Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Update Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * API Register
 */
export const deleteProvince = createAsyncThunk('deleteProvince', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response =  await deleteProvinceApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});

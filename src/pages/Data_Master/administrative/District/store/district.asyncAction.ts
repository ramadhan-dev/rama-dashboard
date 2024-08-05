import { AddNewDistrict, AllDistrict, deleteDistrictApi, districtOptions, OneDistrict, updateDistrictApi } from './../api/district_api'
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewDistrict = createAsyncThunk('addNewDistrict', async (data: masterAdministrative, { rejectWithValue }) => {
	try {
		const response =  await AddNewDistrict(data)
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
export const getAllDistrict = createAsyncThunk('getAllDistrict', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllDistrict(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneDistrict = createAsyncThunk('getOneDistrict', async (payload:string , { rejectWithValue }) => {
	try {
		const response =  await OneDistrict(payload)
		return response;
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateDistrict = createAsyncThunk('updateDistrict', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response =  await updateDistrictApi(data)
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
export const deleteDistrict = createAsyncThunk('deleteDistrict', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response =  await deleteDistrictApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * GET Data District options
 */
export const getDistrictOptions = createAsyncThunk('getDistrictOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await districtOptions(payload)
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});

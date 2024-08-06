import { AddNewVisibility, AllVisibility, visibilityOptions, deleteVisibilityApi, OneVisibility, updateVisibilityApi, updateStatusApi } from '../api/visibility_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewVisibility = createAsyncThunk('addNewVisibility', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewVisibility(data)
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
export const getAllVisibility = createAsyncThunk('getAllVisibility', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllVisibility(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneVisibility = createAsyncThunk('getOneVisibility', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneVisibility(payload)
		toast.success("Event Get Visibility Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get Visibility Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductVisibility = createAsyncThunk('updateVisibility', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateVisibilityApi(data)
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
export const deleteVisibility = createAsyncThunk('deleteVisibility', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteVisibilityApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Visibility options
 */
export const getVisibilityOptions = createAsyncThunk('getVisibilityOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await visibilityOptions(payload)
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Login
 */

export interface UpdateStatus {
	id?: string
}

export const updateStatus = createAsyncThunk('updateStatus', async (data: UpdateStatus, { rejectWithValue }) => {
	try {
		const response = await updateStatusApi(data)
		toast.success("Event Update Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Update Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});


2024080602032

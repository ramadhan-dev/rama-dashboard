import { AddNewStatus, AllStatus, statusOptions, deleteStatusApi, OneStatus, updateStatusApi, updateProductStatusApi } from '../api/status_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewStatus = createAsyncThunk('addNewStatus', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewStatus(data)
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
export const getAllStatus = createAsyncThunk('getAllStatus', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllStatus(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneStatus = createAsyncThunk('getOneStatus', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneStatus(payload)
		return response;
	} catch (error: any) {
		toast.error("Event Get Status Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductStatus = createAsyncThunk('updateProductStatus', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateProductStatusApi(data)
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
export const deleteStatus = createAsyncThunk('deleteStatus', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteStatusApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Status options
 */
export const getStatusOptions = createAsyncThunk('getStatusOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await statusOptions(payload)
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

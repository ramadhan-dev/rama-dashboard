import { AddNewSize, AllSize, sizeOptions, deleteSizeApi, OneSize, updateSizeApi, updateStatusApi } from '../api/size_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewSize = createAsyncThunk('addNewSize', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewSize(data)
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
export const getAllSize = createAsyncThunk('getAllSize', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllSize(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneSize = createAsyncThunk('getOneSize', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneSize(payload)
		return response;
	} catch (error: any) {
		toast.error("Event Get Size Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductSize = createAsyncThunk('updateSize', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateSizeApi(data)
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
export const deleteSize = createAsyncThunk('deleteSize', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteSizeApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Size options
 */
export const getSizeOptions = createAsyncThunk('getSizeOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await sizeOptions(payload)
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

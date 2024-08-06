import { AddNewType, AllType, typeOptions, deleteTypeApi, OneType, updateTypeApi, updateStatusApi } from '../api/type_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewType = createAsyncThunk('addNewType', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewType(data)
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
export const getAllType = createAsyncThunk('getAllType', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllType(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneType = createAsyncThunk('getOneType', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneType(payload)
		toast.success("Event Get Type Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get Type Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductType = createAsyncThunk('updateType', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateTypeApi(data)
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
export const deleteType = createAsyncThunk('deleteType', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteTypeApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Type options
 */
export const getTypeOptions = createAsyncThunk('getTypeOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await typeOptions(payload)
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

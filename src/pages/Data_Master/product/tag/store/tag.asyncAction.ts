import { AddNewTag, AllTag, tagOptions, deleteTagApi, OneTag, updateTagApi, updateStatusApi } from '../api/tag_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewTag = createAsyncThunk('addNewTag', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewTag(data)
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
export const getAllTag = createAsyncThunk('getAllTag', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllTag(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneTag = createAsyncThunk('getOneTag', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneTag(payload)
		toast.success("Event Get Tag Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get Tag Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductTag = createAsyncThunk('updateTag', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateTagApi(data)
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
export const deleteTag = createAsyncThunk('deleteTag', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteTagApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Tag options
 */
export const getTagOptions = createAsyncThunk('getTagOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await tagOptions(payload)
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

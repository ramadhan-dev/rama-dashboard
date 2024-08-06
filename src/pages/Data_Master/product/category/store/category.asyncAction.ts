import { AddNewCategory, AllCategory, categoryOptions, deleteCategoryApi, OneCategory, updateCategoryApi, updateStatusApi } from './../api/category_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewCategory = createAsyncThunk('addNewCategory', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewCategory(data)
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
export const getAllCategory = createAsyncThunk('getAllCategory', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllCategory(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneCategory = createAsyncThunk('getOneCategory', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneCategory(payload)
		toast.success("Event Get Category Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get Category Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductCategory = createAsyncThunk('updateCategory', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateCategoryApi(data)
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
export const deleteCategory = createAsyncThunk('deleteCategory', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteCategoryApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Category options
 */
export const getCategoryOptions = createAsyncThunk('getCategoryOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await categoryOptions(payload)
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

import { AddNewBrand, AllBrand, brandOptions, deleteBrandApi, OneBrand, updateBrandApi, updateStatusApi } from './../api/brand_api'
import { masterAdministrative, paginationPayload, ProductAtt } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewBrand = createAsyncThunk('addNewBrand', async (data: ProductAtt, { rejectWithValue }) => {
	try {
		const response = await AddNewBrand(data)
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
export const getAllBrand = createAsyncThunk('getAllBrand', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllBrand(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneBrand = createAsyncThunk('getOneBrand', async (payload:string , { rejectWithValue }) => {
	try {
		const response = await OneBrand(payload)
		toast.success("Event Get Brand Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get Brand Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateProductBrand = createAsyncThunk('updateBrand', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response = await updateBrandApi(data)
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
export const deleteBrand = createAsyncThunk('deleteBrand', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response = await deleteBrandApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data Brand options
 */
export const getBrandOptions = createAsyncThunk('getBrandOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await brandOptions(payload)
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

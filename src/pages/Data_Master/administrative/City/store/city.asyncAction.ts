import { AddNewCity, AllCity, cityOptions, deleteCityApi, OneCity, updateCityApi } from './../api/city_api'
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * API Login
 */
export const createNewCity = createAsyncThunk('addNewCity', async (data: masterAdministrative, { rejectWithValue }) => {
	try {
		const response =  await AddNewCity(data)
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
export const getAllCity = createAsyncThunk('getAllCity', async (payload: paginationPayload, { rejectWithValue }) => {
	try {
		const response = await AllCity(payload)
		return response
	} catch (error: any) {
		return rejectWithValue(error?.data || error);
	}
});


/**
 * API Register
 */
export const getOneCity = createAsyncThunk('getOneCity', async (payload:string , { rejectWithValue }) => {
	try {
		const response =  await OneCity(payload)
		toast.success("Event Get City Successfully", { autoClose: 2000 });
		return response;
	} catch (error: any) {
		toast.error("Event Get City Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});




/**
 * API Login
 */

export interface UploadProps extends masterAdministrative {
	id?:string|undefined
}

export const updateCity = createAsyncThunk('updateCity', async (data: UploadProps, { rejectWithValue }) => {
	try {
		const response =  await updateCityApi(data)
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
export const deleteCity = createAsyncThunk('deleteCity', async (payload: string|undefined, { rejectWithValue }) => {
	try {
		const response =  await deleteCityApi(payload)
		toast.success("Event Delete Successfully", { autoClose: 2000 });
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});



/**
 * GET Data City options
 */
export const getCityOptions = createAsyncThunk('getCityOptions', async (payload: string | undefined, { rejectWithValue }) => {
	try {
		const response = await cityOptions(payload)
		return response
	} catch (error: any) {
		toast.error("Event Delete Failed", { autoClose: 2000 });
		return rejectWithValue(error?.data || error);
	}
});

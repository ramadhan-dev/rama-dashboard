import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCounters = createAsyncThunk("ecommerce/getCounters", async () => {
	try {
		const response:[] = [];
		return response;
	} catch (error) {
		return error;
	}
});



/**
 *
 */
export const getOrderStatistic = createAsyncThunk("ecommerce/getOrderStatistics", async () => {
	try {
		const response: [] = [];
		return response;
	} catch (error) {
		return error;
	}
});

/**
 *
 */
export const getSalesRevenue = createAsyncThunk("ecommerce/getSalesRevenue", async () => {
	try {
		const response: [] = [];
		return response;
	} catch (error) {
		return error;
	}
});

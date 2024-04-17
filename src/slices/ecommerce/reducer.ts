import { createSlice } from "@reduxjs/toolkit";
import { getCounters, getOrderStatistic, getSalesRevenue } from "./thunk";

export const initialState = {
	orders: [],
	sellers: [],
	productList: [],
	productGrid: [],
	counter: [],
	counterErrors: {},
	orderStatistics: [],
	orderStatisticsErrors: {},
	salesRevenue: [],
	salesRevenueErrors: {}

};

const EcommerceSlice = createSlice({
	name: 'Ecommerce',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// counter
		builder.addCase(getCounters.fulfilled, (state: any, action: any) => {
			state.counter = action.payload;
		});
		builder.addCase(getCounters.rejected, (state: any, action: any) => {
			state.counterErrors = action.payload.error || null;
		});

		// order statistics
		builder.addCase(getOrderStatistic.fulfilled, (state: any, action: any) => {
			state.orderStatistics = action.payload;
		});
		builder.addCase(getOrderStatistic.rejected, (state: any, action: any) => {
			state.orderStatisticsErrors = action.payload.error || null;
		});

		// order statistics
		builder.addCase(getSalesRevenue.fulfilled, (state: any, action: any) => {
			state.salesRevenue = action.payload;
		});
		builder.addCase(getSalesRevenue.rejected, (state: any, action: any) => {
			state.salesRevenueErrors = action.payload.error || null;
		});
	}
})


export default EcommerceSlice.reducer;

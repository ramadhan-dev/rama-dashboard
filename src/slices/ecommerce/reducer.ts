import { createSlice } from "@reduxjs/toolkit";
import { getCounters } from "./thunk";

export const initialState = {
	orders: [],
	sellers: [],
	productList: [],
	productGrid: [],
	reviews: [],
	errors: {}
};

const EcommerceSlice = createSlice({
	name: 'Ecommerce',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// counter
		builder.addCase(getCounters.fulfilled, (state: any, action: any) => {
			console.log("🚀 ~ builder.addCase ~ action:", action)
			console.log("🚀 ~ builder.addCase ~ state:", state)
			state.reviews = action.payload;
		});
		builder.addCase(getCounters.rejected, (state: any, action: any) => {
			state.error = action.payload.error || null;
		});
	}
})


export default EcommerceSlice.reducer;

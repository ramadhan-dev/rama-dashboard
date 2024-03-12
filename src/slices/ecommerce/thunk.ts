import { getCounter } from "#/helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCounters = createAsyncThunk("ecommerce/getCounters", async () => {
	try {
		const response = getCounter();
		console.log("🚀 ~ getCounters ~ response:", response)
		return response;
	} catch (error) {
		return error;
	}
});

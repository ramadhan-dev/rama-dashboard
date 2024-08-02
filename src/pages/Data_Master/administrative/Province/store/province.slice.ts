import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createNewProvince, getAllProvince } from "./province.asyncAction";


interface ProvinceState {
	data: masterAdministrative | undefined;
	loading: boolean;
	error: string | undefined;
	success: boolean;
	isEdited: boolean;
	isDetail: boolean;
	pageTitle: string;
	showModal:boolean;
	meta: paginationPayload
}


const initialState: ProvinceState = {
	data: undefined,
	error: "",
	success: false,
	isEdited: false,
	isDetail: false,
	loading: false,
	pageTitle: "Province List",
	showModal: false,
	meta: {
		pagination: {
			page: 1,
			size: 10,
		},
		filter: [],
		sort: [],
		search: '',
		total: 0,
		lastId: null,
	},
};


export const provinceSlice = createSlice({
	name: "province",
	initialState,
	reducers: {
		setEdit(state: ProvinceState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setDetail(state: ProvinceState, action: PayloadAction<boolean>) {
			state.isDetail = action.payload;
		},
		setPageTitle(state: ProvinceState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setShowModal(state: ProvinceState, action: PayloadAction<boolean>) {
			state.showModal = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProvince.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(getAllProvince.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.showModal = false;
			})
			.addCase(getAllProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.error = payload?.data || payload;
			})
			.addCase(createNewProvince.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(createNewProvince.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.showModal = false;
			})
			.addCase(createNewProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.error = payload?.data || payload;
			})
	},
});

// export default provinceSlice.reducer;

export const { reducer: ProvinceReducer, actions: provinceAction } = provinceSlice;

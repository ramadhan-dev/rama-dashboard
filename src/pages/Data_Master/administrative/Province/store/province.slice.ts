import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { masterAdministrative, paginationPayload, Province } from "#/interfaces/common";
import { createNewProvince, getAllProvince } from "./province.asyncAction";


interface ProvinceState {
	data: masterAdministrative | undefined;
	loading: boolean;
	getDataLoading: boolean;
	error: string | undefined;
	success: boolean;
	isEdited: boolean;
	isDetail: boolean;
	pageTitle: string;
	showModal:boolean;
	meta: paginationPayload
	provinceList: Province[]
}


const initialState: ProvinceState = {
	data: undefined,
	provinceList:[],
	error: "",
	success: false,
	isEdited: false,
	isDetail: false,
	loading: false,
	getDataLoading: false,
	pageTitle: "Province List",
	showModal: false,
	meta: {
		pagination: {
			pageIndex: 1,
			pageSize: 10,
		},
		filter: [],
		sort: [],
		search: '',
		total: 0,
		pageCount: 0,
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
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllProvince.fulfilled, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.success = true;
				state.provinceList = payload?.data || payload
				const pagination  = {
					pagination: {
						pageIndex: payload?.currentPage - 1,
						pageSize: 10
					},
					total: payload?.totalData,
					pageCount: payload?.totalPage
				}
				state.meta = { ...state?.meta, ...pagination }
			})
			.addCase(getAllProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
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

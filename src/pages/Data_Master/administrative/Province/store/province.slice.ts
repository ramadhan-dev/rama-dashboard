import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { masterAdministrative, paginationPayload, Province } from "#/interfaces/common";
import { createNewProvince, deleteProvince, getAllProvince, getOneProvince, updateProvince } from "./province.asyncAction";


interface ProvinceState {
	data: masterAdministrative | undefined;
	dataSelected:string | undefined;
	loading: boolean;
	getDataLoading: boolean;
	error: string | undefined;
	success: boolean;
	isUpdated: boolean;
	isDeleted: boolean;
	isEdited: boolean;
	isDetail: boolean;
	pageTitle: string;
	showModal: boolean;
	showModalDelete: boolean;
	showModalUpdate:boolean;
	meta: paginationPayload
	provinceList: Province[]
	province: Province | undefined
}


const initialState: ProvinceState = {
	data: undefined,
	dataSelected: undefined,
	provinceList: [],
	province: undefined,
	error: "",
	success: false,
	isUpdated: false,
	isDeleted: false,
	isEdited: false,
	isDetail: false,
	loading: false,
	getDataLoading: false,
	pageTitle: "Province List",
	showModal: false,
	showModalDelete: false,
	showModalUpdate: false,
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
		},
		setShowModalDelete(state: ProvinceState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: ProvinceState, action: PayloadAction<boolean>) {
			state.showModalUpdate = action.payload;
		},
		setDataSelected(state: ProvinceState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
		setFormError(state: ProvinceState, action: PayloadAction<string>) {
			state.error = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllProvince.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllProvince.fulfilled, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.success = true;
				state.provinceList = payload?.data || payload
				const pagination = {
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
			// End

			// Add New
			.addCase(createNewProvince.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(createNewProvince.fulfilled, (state) => {
				state.loading = false;
				state.success = true;
				state.showModal = false;
				state.isUpdated = true;
				state.showModalUpdate = false;
			})
			.addCase(createNewProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.showModalUpdate = false;
				state.error = payload?.data || payload;
			})
			// END

			// Get One
			.addCase(getOneProvince.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(getOneProvince.fulfilled, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.success = true;
				state.isEdited = true;
				state.showModal = true;
				state.province = payload?.data
			})
			.addCase(getOneProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.province = undefined
				state.error = payload?.data || payload;
			})
			// END

			// Update
			.addCase(updateProvince.pending, (state) => {
				state.loading = true;
				state.isUpdated= false;
				state.error = undefined;
			})
			.addCase(updateProvince.fulfilled, (state) => {
				state.loading = false;
				state.isUpdated = true;
				state.isEdited = false;
				state.showModal = false;
			})
			.addCase(updateProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isUpdated = false;
				state.province = undefined
				state.error = payload?.data?.errorResponse?.errmsg;
			})
			// END

			// Delete
			.addCase(deleteProvince.pending, (state) => {
				state.loading = true;
				state.isDeleted = false;
				state.error = undefined;
			})
			.addCase(deleteProvince.fulfilled, (state) => {
				state.loading = false;
				state.isDeleted = true;
				state.showModalDelete = false;
			})
			.addCase(deleteProvince.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isDeleted = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

// export default provinceSlice.reducer;

export const { reducer: ProvinceReducer, actions: provinceAction } = provinceSlice;

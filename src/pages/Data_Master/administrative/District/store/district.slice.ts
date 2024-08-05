import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { District, masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createNewDistrict, deleteDistrict, getAllDistrict, getOneDistrict, updateDistrict } from "./district.asyncAction";


interface DistrictState {
	data: masterAdministrative | undefined;
	dataSelected: string | undefined;
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
	showModalUpdate: boolean;
	meta: paginationPayload
	districtList: District[]
	district: District | undefined
}


const initialState: DistrictState = {
	data: undefined,
	dataSelected: undefined,
	districtList: [],
	district: undefined,
	error: "",
	success: false,
	isUpdated: false,
	isDeleted: false,
	isEdited: false,
	isDetail: false,
	loading: false,
	getDataLoading: false,
	pageTitle: "District List",
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


export const districtSlice = createSlice({
	name: "district",
	initialState,
	reducers: {
		setEdit(state: DistrictState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setDetail(state: DistrictState, action: PayloadAction<boolean>) {
			state.isDetail = action.payload;
		},
		setPageTitle(state: DistrictState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setShowModal(state: DistrictState, action: PayloadAction<boolean>) {
			state.showModal = action.payload;
		},
		setShowModalDelete(state: DistrictState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: DistrictState, action: PayloadAction<boolean>) {
			state.showModalUpdate = action.payload;
		},
		setDataSelected(state: DistrictState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
		setFormError(state: DistrictState, action: PayloadAction<string>) {
			state.error = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllDistrict.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllDistrict.fulfilled, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.success = true;
				state.districtList = payload?.data || payload
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
			.addCase(getAllDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewDistrict.pending, (state) => {
				state.loading = true;
				state.error = undefined;
				state.isUpdated = false;

			})
			.addCase(createNewDistrict.fulfilled, (state) => {
				state.loading = false;
				state.success = true;
				state.showModal = false;
				state.isUpdated = true;
				state.showModalUpdate = false;
			})
			.addCase(createNewDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.showModalUpdate = true;
				state.error = payload?.data || payload;
			})
			// END


			// Get One
			.addCase(getOneDistrict.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(getOneDistrict.fulfilled, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.success = true;
				state.isEdited = true;
				state.showModal = true;
				state.district = payload?.data
			})
			.addCase(getOneDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.district = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateDistrict.pending, (state) => {
				state.loading = true;
				state.isUpdated = false;
				state.error = undefined;
			})
			.addCase(updateDistrict.fulfilled, (state) => {
				state.loading = false;
				state.isUpdated = true;
				state.isEdited = false;
				state.showModal = false;
			})
			.addCase(updateDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isUpdated = false;
				state.showModalUpdate = false;
				state.error = payload?.data;
			})
		// END


			// Delete
			.addCase(deleteDistrict.pending, (state) => {
				state.loading = true;
				state.isDeleted = false;
				state.error = undefined;
			})
			.addCase(deleteDistrict.fulfilled, (state) => {
				state.loading = false;
				state.isDeleted = true;
				state.showModalDelete = false;
			})
			.addCase(deleteDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isDeleted = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END



	},
});

// export default districtSlice.reducer;

export const { reducer: DistrictReducer, actions: districtAction } = districtSlice;

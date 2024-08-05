import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubDistrict, masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createNewSubDistrict, deleteSubDistrict, getAllSubDistrict, getOneSubDistrict, updateSubDistrict } from "./subdistrict.asyncAction";


interface SubDistrictState {
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
	subDistrictList: SubDistrict[]
	subDistrict: SubDistrict | undefined
}


const initialState: SubDistrictState = {
	data: undefined,
	dataSelected: undefined,
	subDistrictList: [],
	subDistrict: undefined,
	error: "",
	success: false,
	isUpdated: false,
	isDeleted: false,
	isEdited: false,
	isDetail: false,
	loading: false,
	getDataLoading: false,
	pageTitle: "Sub District List",
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


export const subDistrictSlice = createSlice({
	name: "subDistrict",
	initialState,
	reducers: {
		setEdit(state: SubDistrictState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setDetail(state: SubDistrictState, action: PayloadAction<boolean>) {
			state.isDetail = action.payload;
		},
		setPageTitle(state: SubDistrictState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setShowModal(state: SubDistrictState, action: PayloadAction<boolean>) {
			state.showModal = action.payload;
		},
		setShowModalDelete(state: SubDistrictState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: SubDistrictState, action: PayloadAction<boolean>) {
			state.showModalUpdate = action.payload;
		},
		setDataSelected(state: SubDistrictState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
		setFormError(state: SubDistrictState, action: PayloadAction<string>) {
			state.error = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllSubDistrict.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllSubDistrict.fulfilled, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.success = true;
				state.subDistrictList = payload?.data || payload
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
			.addCase(getAllSubDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewSubDistrict.pending, (state) => {
				state.loading = true;
				state.error = undefined;
				state.isUpdated = false;

			})
			.addCase(createNewSubDistrict.fulfilled, (state) => {
				state.loading = false;
				state.success = true;
				state.showModal = false;
				state.isUpdated = true;
				state.showModalUpdate = false;
			})
			.addCase(createNewSubDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.showModalUpdate = true;
				state.error = payload?.data || payload;
			})
			// END


			// Get One
			.addCase(getOneSubDistrict.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(getOneSubDistrict.fulfilled, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.success = true;
				state.isEdited = true;
				state.showModal = true;
				state.subDistrict = payload?.data
			})
			.addCase(getOneSubDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.subDistrict = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateSubDistrict.pending, (state) => {
				state.loading = true;
				state.isUpdated = false;
				state.error = undefined;
			})
			.addCase(updateSubDistrict.fulfilled, (state) => {
				state.loading = false;
				state.isUpdated = true;
				state.isEdited = false;
				state.showModal = false;
			})
			.addCase(updateSubDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isUpdated = false;
				state.showModalUpdate = false;
				state.error = payload?.data;
			})
		// END


			// Delete
			.addCase(deleteSubDistrict.pending, (state) => {
				state.loading = true;
				state.isDeleted = false;
				state.error = undefined;
			})
			.addCase(deleteSubDistrict.fulfilled, (state) => {
				state.loading = false;
				state.isDeleted = true;
				state.showModalDelete = false;
			})
			.addCase(deleteSubDistrict.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isDeleted = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END



	},
});

// export default subDistrictSlice.reducer;

export const { reducer: SubDistrictReducer, actions: subDistrictAction } = subDistrictSlice;

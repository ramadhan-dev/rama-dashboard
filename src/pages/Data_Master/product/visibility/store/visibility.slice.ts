import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewVisibility, deleteVisibility, getAllVisibility, getOneVisibility, updateProductVisibility, updateStatus } from "./visibility.asyncAction";

interface VisibilityState {
	isEdited: boolean;
	pageTitle: string;
	showModalAdd: boolean;
	showModalDelete: boolean;
	showModalConfirmation: boolean;
	data: ProductAtt[] ;
	isRefresh:boolean
	getDataLoading: boolean;
	meta: paginationPayload
	error: string | undefined
	visibility: ProductAtt | undefined
	dataSelected: string | undefined;
	buttonDisable:boolean
}


const initialState: VisibilityState = {
	isEdited: false,
	pageTitle: "Visibility List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	visibility:undefined,
	dataSelected: undefined,
	buttonDisable:false,
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


export const visibilitySlice = createSlice({
	name: "visibility",
	initialState,
	reducers: {
		setEdit(state: VisibilityState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: VisibilityState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: VisibilityState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: VisibilityState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: VisibilityState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: VisibilityState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: VisibilityState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllVisibility.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllVisibility.fulfilled, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.data = payload?.data || payload
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
			.addCase(getAllVisibility.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewVisibility.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewVisibility.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewVisibility.rejected, (state, action) => {
				const { payload }: any = action
				state.showModalConfirmation = false;
				state.error = payload?.data || payload;
			})
		// END

			// Update Status
			.addCase(updateStatus.pending, (state) => {
				state.error = undefined;
				state.buttonDisable = true;
			})
			.addCase(updateStatus.fulfilled, (state, action) => {
				state.buttonDisable = false;

				const index = state.data.findIndex(item => item._id === action.meta.arg.id);
				if (index !== -1) {
					state.data[index].status = !state.data[index].status;
				}
			})
			.addCase(updateStatus.rejected, (state, action) => {
				state.buttonDisable = false;

				const { payload }: any = action
				state.error = payload?.data || payload;
			})
		// END



			// Get One
			.addCase(getOneVisibility.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneVisibility.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.visibility = payload?.data
			})
			.addCase(getOneVisibility.rejected, (state, action) => {
				const { payload }: any = action
				state.visibility = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductVisibility.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductVisibility.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductVisibility.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.visibility = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteVisibility.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteVisibility.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteVisibility.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductVisibilityReducer, actions: visibilityAction } = visibilitySlice;

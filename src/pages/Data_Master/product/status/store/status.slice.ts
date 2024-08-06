import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewStatus, deleteStatus, getAllStatus, getOneStatus, updateProductStatus, updateStatus } from "./status.asyncAction";

interface StatusState {
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
	status: ProductAtt | undefined
	dataSelected: string | undefined;
	buttonDisable: boolean;

}


const initialState: StatusState = {
	isEdited: false,
	pageTitle: "Status List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	status:undefined,
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


export const statusSlice = createSlice({
	name: "status",
	initialState,
	reducers: {
		setEdit(state: StatusState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: StatusState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: StatusState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: StatusState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: StatusState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: StatusState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: StatusState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllStatus.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllStatus.fulfilled, (state, action) => {
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
			.addCase(getAllStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewStatus.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewStatus.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.showModalConfirmation = false;
				state.error = payload?.data || payload;
			})
		// END

			// Update Status
			.addCase(updateStatus.pending, (state) => {
				state.error = undefined;
				state.buttonDisable = true
			})
			.addCase(updateStatus.fulfilled, (state, action) => {
				const index = state.data.findIndex(item => item._id === action.meta.arg.id);
				state.buttonDisable = false
				if (index !== -1) {
					state.data[index].status = !state.data[index].status;
				}
			})
			.addCase(updateStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.buttonDisable = false
				state.error = payload?.data || payload;
			})
		// END



			// Get One
			.addCase(getOneStatus.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneStatus.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.status = payload?.data
			})
			.addCase(getOneStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.status = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductStatus.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductStatus.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.status = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteStatus.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteStatus.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductStatusReducer, actions: statusAction } = statusSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewSize, deleteSize, getAllSize, getOneSize, updateProductSize, updateStatus } from "./size.asyncAction";

interface SizeState {
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
	size: ProductAtt | undefined
	dataSelected: string | undefined;
	buttonDisable: boolean;

}


const initialState: SizeState = {
	isEdited: false,
	pageTitle: "Size List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	size:undefined,
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


export const sizeSlice = createSlice({
	name: "size",
	initialState,
	reducers: {
		setEdit(state: SizeState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: SizeState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: SizeState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: SizeState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: SizeState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: SizeState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: SizeState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllSize.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllSize.fulfilled, (state, action) => {
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
			.addCase(getAllSize.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewSize.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewSize.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewSize.rejected, (state, action) => {
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
			.addCase(getOneSize.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneSize.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.size = payload?.data
			})
			.addCase(getOneSize.rejected, (state, action) => {
				const { payload }: any = action
				state.size = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductSize.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductSize.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductSize.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.size = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteSize.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteSize.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteSize.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductSizeReducer, actions: sizeAction } = sizeSlice;

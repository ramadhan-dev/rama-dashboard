import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewType, deleteType, getAllType, getOneType, updateProductType, updateStatus } from "./type.asyncAction";

interface TypeState {
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
	type: ProductAtt | undefined
	dataSelected: string | undefined;
	buttonDisable:boolean
}


const initialState: TypeState = {
	isEdited: false,
	pageTitle: "Type List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	type:undefined,
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


export const typeSlice = createSlice({
	name: "type",
	initialState,
	reducers: {
		setEdit(state: TypeState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: TypeState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: TypeState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: TypeState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: TypeState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: TypeState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: TypeState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllType.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllType.fulfilled, (state, action) => {
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
			.addCase(getAllType.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewType.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewType.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewType.rejected, (state, action) => {
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
			.addCase(getOneType.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneType.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.type = payload?.data
			})
			.addCase(getOneType.rejected, (state, action) => {
				const { payload }: any = action
				state.type = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductType.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductType.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductType.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.type = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteType.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteType.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteType.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductTypeReducer, actions: typeAction } = typeSlice;

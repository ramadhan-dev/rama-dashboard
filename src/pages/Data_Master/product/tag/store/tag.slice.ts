import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewTag, deleteTag, getAllTag, getOneTag, updateProductTag, updateStatus } from "./tag.asyncAction";

interface TagState {
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
	tag: ProductAtt | undefined
	dataSelected: string | undefined;
	buttonDisable:boolean
}


const initialState: TagState = {
	isEdited: false,
	pageTitle: "Tag List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	tag:undefined,
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


export const tagSlice = createSlice({
	name: "tag",
	initialState,
	reducers: {
		setEdit(state: TagState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: TagState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: TagState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: TagState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: TagState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: TagState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: TagState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllTag.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllTag.fulfilled, (state, action) => {
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
			.addCase(getAllTag.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewTag.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewTag.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewTag.rejected, (state, action) => {
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
			.addCase(getOneTag.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneTag.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.tag = payload?.data
			})
			.addCase(getOneTag.rejected, (state, action) => {
				const { payload }: any = action
				state.tag = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductTag.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductTag.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductTag.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.tag = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteTag.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteTag.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteTag.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductTagReducer, actions: tagAction } = tagSlice;

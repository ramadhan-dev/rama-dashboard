import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewCategory, deleteCategory, getAllCategory, getOneCategory, updateProductCategory, updateStatus } from "./category.asyncAction";

interface CategoryState {
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
	category: ProductAtt | undefined
	dataSelected: string | undefined;
	buttonDisable: boolean;

}


const initialState: CategoryState = {
	isEdited: false,
	pageTitle: "Category List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	category:undefined,
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


export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		setEdit(state: CategoryState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: CategoryState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: CategoryState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: CategoryState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: CategoryState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: CategoryState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: CategoryState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllCategory.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllCategory.fulfilled, (state, action) => {
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
			.addCase(getAllCategory.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewCategory.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewCategory.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewCategory.rejected, (state, action) => {
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
			.addCase(getOneCategory.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneCategory.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.category = payload?.data
			})
			.addCase(getOneCategory.rejected, (state, action) => {
				const { payload }: any = action
				state.category = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductCategory.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductCategory.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductCategory.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.category = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteCategory.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteCategory.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteCategory.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductCategoryReducer, actions: categoryAction } = categorySlice;

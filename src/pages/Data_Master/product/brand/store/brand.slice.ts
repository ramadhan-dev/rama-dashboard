import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductAtt, paginationPayload } from "#/interfaces/common";
import { createNewBrand, deleteBrand, getAllBrand, getOneBrand, updateProductBrand, updateStatus } from "./brand.asyncAction";

interface BrandState {
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
	brand: ProductAtt | undefined
	dataSelected: string | undefined;

}


const initialState: BrandState = {
	isEdited: false,
	pageTitle: "Brand List",
	showModalAdd: false,
	showModalDelete: false,
	showModalConfirmation: false,
	data: [],
	isRefresh:false,
	getDataLoading: false,
	error: undefined,
	brand:undefined,
	dataSelected: undefined,
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


export const brandSlice = createSlice({
	name: "brand",
	initialState,
	reducers: {
		setEdit(state: BrandState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setPageTitle(state: BrandState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setOpenModalAdd(state: BrandState, action: PayloadAction<boolean>) {
			state.showModalAdd = action.payload;
		},
		setShowModalDelete(state: BrandState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: BrandState, action: PayloadAction<boolean>) {
			state.showModalConfirmation = action.payload;
		},
		setFormError(state: BrandState, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setDataSelected(state: BrandState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllBrand.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllBrand.fulfilled, (state, action) => {
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
			.addCase(getAllBrand.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewBrand.pending, (state) => {
				state.error = undefined;
				state.isRefresh = false;
			})
			.addCase(createNewBrand.fulfilled, (state) => {
				state.showModalAdd = false;
				state.showModalConfirmation = false;
				state.isRefresh = true;
			})
			.addCase(createNewBrand.rejected, (state, action) => {
				const { payload }: any = action
				state.showModalConfirmation = false;
				state.error = payload?.data || payload;
			})
		// END

			// Update Status
			.addCase(updateStatus.pending, (state) => {
				state.error = undefined;
			})
			.addCase(updateStatus.fulfilled, (state, action) => {
				const index = state.data.findIndex(item => item._id === action.meta.arg.id);
				if (index !== -1) {
					state.data[index].status = !state.data[index].status;
				}
			})
			.addCase(updateStatus.rejected, (state, action) => {
				const { payload }: any = action
				state.error = payload?.data || payload;
			})
		// END



			// Get One
			.addCase(getOneBrand.pending, (state) => {
				state.error = undefined;
			})
			.addCase(getOneBrand.fulfilled, (state, action) => {
				const { payload }: any = action
				state.isEdited = true;
				state.showModalAdd = true;
				state.brand = payload?.data
			})
			.addCase(getOneBrand.rejected, (state, action) => {
				const { payload }: any = action
				state.brand = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateProductBrand.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(updateProductBrand.fulfilled, (state) => {
				state.isRefresh = true;
				state.isEdited = false;
				state.showModalAdd = false;
				state.showModalConfirmation= false;
			})
			.addCase(updateProductBrand.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.brand = undefined
				state.showModalConfirmation = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteBrand.pending, (state) => {
				state.isRefresh = false;
				state.error = undefined;
			})
			.addCase(deleteBrand.fulfilled, (state) => {
				state.isRefresh = true;
				state.showModalDelete = false;
			})
			.addCase(deleteBrand.rejected, (state, action) => {
				const { payload }: any = action
				state.isRefresh = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

export const { reducer: ProductBrandReducer, actions: brandAction } = brandSlice;

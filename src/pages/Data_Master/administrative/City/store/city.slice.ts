import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City, masterAdministrative, paginationPayload } from "#/interfaces/common";
import { createNewCity, deleteCity, getAllCity, getOneCity, updateCity } from "./city.asyncAction";


interface CityState {
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
	cityList: City[]
	city: City | undefined
}


const initialState: CityState = {
	data: undefined,
	dataSelected: undefined,
	cityList: [],
	city: undefined,
	error: "",
	success: false,
	isUpdated: false,
	isDeleted: false,
	isEdited: false,
	isDetail: false,
	loading: false,
	getDataLoading: false,
	pageTitle: "City List",
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


export const citySlice = createSlice({
	name: "city",
	initialState,
	reducers: {
		setEdit(state: CityState, action: PayloadAction<boolean>) {
			state.isEdited = action.payload;
		},
		setDetail(state: CityState, action: PayloadAction<boolean>) {
			state.isDetail = action.payload;
		},
		setPageTitle(state: CityState, action: PayloadAction<string>) {
			state.pageTitle = action.payload;
		},
		setShowModal(state: CityState, action: PayloadAction<boolean>) {
			state.showModal = action.payload;
		},
		setShowModalDelete(state: CityState, action: PayloadAction<boolean>) {
			state.showModalDelete = action.payload;
		},
		setShowModalUpdate(state: CityState, action: PayloadAction<boolean>) {
			state.showModalUpdate = action.payload;
		},
		setDataSelected(state: CityState, action: PayloadAction<string>) {
			state.dataSelected = action.payload;
		},
		setFormError(state: CityState, action: PayloadAction<string>) {
			state.error = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder

			// Get All data
			.addCase(getAllCity.pending, (state) => {
				state.getDataLoading = true;
				state.error = undefined;
			})
			.addCase(getAllCity.fulfilled, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.success = true;
				state.cityList = payload?.data || payload
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
			.addCase(getAllCity.rejected, (state, action) => {
				const { payload }: any = action
				state.getDataLoading = false;
				state.error = payload?.data || payload;
			})
			// End


			// Add New
			.addCase(createNewCity.pending, (state) => {
				state.loading = true;
				state.error = undefined;
				state.isUpdated = false;

			})
			.addCase(createNewCity.fulfilled, (state) => {
				state.loading = false;
				state.success = true;
				state.showModal = false;
				state.isUpdated = true;
				state.showModalUpdate = false;
			})
			.addCase(createNewCity.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.showModalUpdate = false;
				state.error = payload?.data || payload;
			})
			// END


			// Get One
			.addCase(getOneCity.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(getOneCity.fulfilled, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.success = true;
				state.isEdited = true;
				state.showModal = true;
				state.city = payload?.data
			})
			.addCase(getOneCity.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.city = undefined
				state.error = payload?.data || payload;
			})
		// END


			// Update
			.addCase(updateCity.pending, (state) => {
				state.loading = true;
				state.isUpdated = false;
				state.error = undefined;
			})
			.addCase(updateCity.fulfilled, (state) => {
				state.loading = false;
				state.isUpdated = true;
				state.isEdited = false;
				state.showModal = false;
			})
			.addCase(updateCity.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isUpdated = false;
				state.city = undefined
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END


			// Delete
			.addCase(deleteCity.pending, (state) => {
				state.loading = true;
				state.isDeleted = false;
				state.error = undefined;
			})
			.addCase(deleteCity.fulfilled, (state) => {
				state.loading = false;
				state.isDeleted = true;
				state.showModalDelete = false;
			})
			.addCase(deleteCity.rejected, (state, action) => {
				const { payload }: any = action
				state.loading = false;
				state.isDeleted = false;
				state.error = payload?.data?.errorResponse?.errmsg;
			})
		// END

	},
});

// export default citySlice.reducer;

export const { reducer: CityReducer, actions: cityAction } = citySlice;

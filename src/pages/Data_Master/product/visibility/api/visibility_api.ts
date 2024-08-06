import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + "/product-visibility/create-product-visibility";
export const GET_ALL_BRAND = API_URL + "/product-visibility/get-all-product-visibility";
export const GET_ONE_BRAND = API_URL + "/product-visibility/get-product-visibility";
export const UPDATE_BRAND = API_URL + "/product-visibility/update-product-visibility";
export const UPDATE_STATUS = API_URL + "/product-visibility/update-status-visibility";
export const DELETE_BRAND = API_URL + "/product-visibility/delete-product-visibility";
export const GET_BRAND_OPTIONS = API_URL + "/product-visibility/get-visibility-options";

const api = new APIClient();

export const AddNewVisibility = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllVisibility = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneVisibility = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateVisibilityApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteVisibilityApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const visibilityOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

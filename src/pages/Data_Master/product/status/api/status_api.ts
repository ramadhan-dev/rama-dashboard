import { API_URL, API_VERSION } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + API_VERSION +   "/product-status/create-product-status";
export const GET_ALL_BRAND = API_URL + API_VERSION +   "/product-status/get-all-product-status";
export const GET_ONE_BRAND = API_URL + API_VERSION +   "/product-status/get-product-status";
export const UPDATE_BRAND = API_URL + API_VERSION +   "/product-status/update-product-status";
export const UPDATE_STATUS = API_URL + API_VERSION +   "/product-status/update-status-status";
export const DELETE_BRAND = API_URL + API_VERSION +   "/product-status/delete-product-status";
export const GET_BRAND_OPTIONS = API_URL + API_VERSION +   "/product-status/get-status-options";

const api = new APIClient();

export const AddNewStatus = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllStatus = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneStatus = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateProductStatusApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteStatusApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const statusOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

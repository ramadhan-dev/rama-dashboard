import { API_URL, API_VERSION } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + API_VERSION +   "/product-type/create-product-type";
export const GET_ALL_BRAND = API_URL + API_VERSION +   "/product-type/get-all-product-type";
export const GET_ONE_BRAND = API_URL + API_VERSION +   "/product-type/get-product-type";
export const UPDATE_BRAND = API_URL + API_VERSION +   "/product-type/update-product-type";
export const UPDATE_STATUS = API_URL + API_VERSION +   "/product-type/update-status-type";
export const DELETE_BRAND = API_URL + API_VERSION +   "/product-type/delete-product-type";
export const GET_BRAND_OPTIONS = API_URL + API_VERSION +   "/product-type/get-type-options";

const api = new APIClient();

export const AddNewType = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllType = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneType = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateTypeApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteTypeApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const typeOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

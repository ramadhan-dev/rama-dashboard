import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + "/product-tag/create-product-tag";
export const GET_ALL_BRAND = API_URL + "/product-tag/get-all-product-tag";
export const GET_ONE_BRAND = API_URL + "/product-tag/get-product-tag";
export const UPDATE_BRAND = API_URL + "/product-tag/update-product-tag";
export const UPDATE_STATUS = API_URL + "/product-tag/update-status-tag";
export const DELETE_BRAND = API_URL + "/product-tag/delete-product-tag";
export const GET_BRAND_OPTIONS = API_URL + "/product-tag/get-tag-options";

const api = new APIClient();

export const AddNewTag = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllTag = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneTag = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateTagApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteTagApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const tagOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

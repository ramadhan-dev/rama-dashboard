import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + "/product-size/create-product-size";
export const GET_ALL_BRAND = API_URL + "/product-size/get-all-product-size";
export const GET_ONE_BRAND = API_URL + "/product-size/get-product-size";
export const UPDATE_BRAND = API_URL + "/product-size/update-product-size";
export const UPDATE_STATUS = API_URL + "/product-size/update-status-size";
export const DELETE_BRAND = API_URL + "/product-size/delete-product-size";
export const GET_BRAND_OPTIONS = API_URL + "/product-size/get-size-options";

const api = new APIClient();

export const AddNewSize = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllSize = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneSize = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateSizeApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteSizeApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const sizeOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

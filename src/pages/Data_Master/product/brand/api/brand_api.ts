import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + "/product-brand/create-product-brand";
export const GET_ALL_BRAND = API_URL + "/product-brand/get-all-product-brand";
export const GET_ONE_BRAND = API_URL + "/product-brand/get-product-brand";
export const UPDATE_BRAND = API_URL + "/product-brand/update-product-brand";
export const UPDATE_STATUS = API_URL + "/product-brand/update-status-brand";
export const DELETE_BRAND = API_URL + "/product-brand/delete-product-brand";
export const GET_BRAND_OPTIONS = API_URL + "/product-brand/get-brand-options";

const api = new APIClient();

export const AddNewBrand = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllBrand = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneBrand = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateBrandApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteBrandApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const brandOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

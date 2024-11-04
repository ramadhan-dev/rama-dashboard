import { API_URL, API_VERSION } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { paginationPayload, ProductAtt } from "#/interfaces/common";

export const ADD_BRAND = API_URL + API_VERSION +  "/product-category/create-product-category";
export const GET_ALL_BRAND = API_URL + API_VERSION +  "/product-category/get-all-product-category";
export const GET_ONE_BRAND = API_URL + API_VERSION +  "/product-category/get-product-category";
export const UPDATE_BRAND = API_URL + API_VERSION +  "/product-category/update-product-category";
export const UPDATE_STATUS = API_URL + API_VERSION +  "/product-category/update-status-category";
export const DELETE_BRAND = API_URL + API_VERSION +  "/product-category/delete-product-category";
export const GET_BRAND_OPTIONS = API_URL + API_VERSION +  "/product-category/get-category-options";

const api = new APIClient();

export const AddNewCategory = (data: ProductAtt) => api.create(ADD_BRAND, data);
export const AllCategory = (payload: paginationPayload) => api.get(GET_ALL_BRAND, payload);
export const OneCategory = (id: string) => api.get(GET_ONE_BRAND, { id });
export const updateCategoryApi = (payload: any) => api.put(UPDATE_BRAND, payload);
export const updateStatusApi = (payload: any) => api.put(UPDATE_STATUS, payload);
export const deleteCategoryApi = (id: string | undefined) => api.delete(DELETE_BRAND, { data: { id } });
export const categoryOptions = (id: string | undefined) => api.get(GET_BRAND_OPTIONS, { id })

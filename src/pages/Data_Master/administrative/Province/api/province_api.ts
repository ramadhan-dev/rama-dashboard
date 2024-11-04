import { API_URL, API_VERSION } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { UploadProps } from "../store/province.asyncAction";

export const ADD_PROVINCE = API_URL + API_VERSION +   "/province/create-province";
export const GET_ALL_PROVINCE = API_URL + API_VERSION +   "/province/get-all-province";
export const GET_ONE_PROVINCE = API_URL + API_VERSION +   "/province/get-province";
export const UPDATE_PROVINCE = API_URL + API_VERSION +   "/province/update-province";
export const DELETE_PROVINCE = API_URL + API_VERSION +   "/province/delete-province";
export const GET_PROVINCE_OPTIONS = API_URL + API_VERSION +   "/province/get-province-options";

const api = new APIClient();

export const AddNewProvince = (data: masterAdministrative) => api.create(ADD_PROVINCE, data);
export const AllProvince = (payload: paginationPayload) => api.get(GET_ALL_PROVINCE, payload);
export const OneProvince = (id: string) => api.get(GET_ONE_PROVINCE, { id });
export const updateProvinceApi = (payload: UploadProps) => api.put(UPDATE_PROVINCE, payload);
export const deleteProvinceApi = (id: string | undefined) => api.delete(DELETE_PROVINCE, { data: { id } });
// @ts-ignore: Unreachable code error
export const provinceOptions = (id: string | undefined) => api.get(GET_PROVINCE_OPTIONS, {})

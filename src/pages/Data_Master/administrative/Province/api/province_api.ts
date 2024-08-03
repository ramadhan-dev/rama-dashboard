import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { UploadProps } from "../store/province.asyncAction";

export const ADD_PROVINCE = API_URL + "/province/create-province";
export const GET_ALL_PROVINCE = API_URL + "/province/get-all-province";
export const GET_ONE_PROVINCE = API_URL + "/province/get-province";
export const UPDATE_PROVINCE = API_URL + "/province/update-province";
export const DELETE_PROVINCE = API_URL + "/province/delete-province";

const api = new APIClient();

export const AddNewProvince = (data: masterAdministrative) => api.create(ADD_PROVINCE, data);
export const AllProvince = (payload: paginationPayload) => api.get(GET_ALL_PROVINCE, payload);
export const OneProvince = (id: string) => api.get(GET_ONE_PROVINCE, { id });
export const updateProvinceApi = (payload: UploadProps) => api.put(UPDATE_PROVINCE, payload);
export const deleteProvinceApi = (id: string|undefined) => api.delete(DELETE_PROVINCE, {  data:{id}  });

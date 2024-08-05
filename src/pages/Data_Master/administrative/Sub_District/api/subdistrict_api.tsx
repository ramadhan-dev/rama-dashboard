import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { UploadProps } from "../store/subdistrict.asyncAction";

export const ADD_SUBDISTRICT = API_URL + "/sub-district/create-sub-district";
export const GET_ALL_SUBDISTRICT = API_URL + "/sub-district/get-all-sub-district";
export const GET_ONE_SUBDISTRICT = API_URL + "/sub-district/get-sub-district";
export const UPDATE_SUBDISTRICT = API_URL + "/sub-district/update-sub-district";
export const DELETE_SUBDISTRICT = API_URL + "/sub-district/delete-sub-district";

const api = new APIClient();

export const AddNewSubDistrict = (data: masterAdministrative) => api.create(ADD_SUBDISTRICT, data);
export const AllSubDistrict = (payload: paginationPayload) => api.get(GET_ALL_SUBDISTRICT, payload);
export const OneSubDistrict = (id: string) => api.get(GET_ONE_SUBDISTRICT, { id });
export const updateSubDistrictApi = (payload: UploadProps) => api.put(UPDATE_SUBDISTRICT, payload);
export const deleteSubDistrictApi = (id: string | undefined) => api.delete(DELETE_SUBDISTRICT, { data: { id } });

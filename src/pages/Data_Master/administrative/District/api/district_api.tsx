import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { UploadProps } from "../store/district.asyncAction";

export const ADD_DISTRICT = API_URL + "/district/create-district";
export const GET_ALL_DISTRICT = API_URL + "/district/get-all-district";
export const GET_ONE_DISTRICT = API_URL + "/district/get-district";
export const UPDATE_DISTRICT = API_URL + "/district/update-district";
export const DELETE_DISTRICT = API_URL + "/district/delete-district";

const api = new APIClient();

export const AddNewDistrict = (data: masterAdministrative) => api.create(ADD_DISTRICT, data);
export const AllDistrict = (payload: paginationPayload) => api.get(GET_ALL_DISTRICT, payload);
export const OneDistrict = (id: string) => api.get(GET_ONE_DISTRICT, { id });
export const updateDistrictApi = (payload: UploadProps) => api.put(UPDATE_DISTRICT, payload);
export const deleteDistrictApi = (id: string | undefined) => api.delete(DELETE_DISTRICT, { data: { id } });

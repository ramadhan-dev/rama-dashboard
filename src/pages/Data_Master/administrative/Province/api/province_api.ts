import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";

export const ADD_PROVINCE = API_URL + "/province/create-province";
export const GET_ALL_PROVINCE = API_URL + "/province/get-all-province";

const api = new APIClient();

export const AddNewProvince = (data: masterAdministrative) => api.create(ADD_PROVINCE, data);
export const AllProvince = (payload: paginationPayload) => api.get(GET_ALL_PROVINCE, payload);

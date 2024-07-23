import { API_URL } from "#/Common/constants/env";
import { APIClient } from "./../../api_helper";

export const ADD_PROVINCE = API_URL + "/province/create-province";

const api = new APIClient();

export const AddNewProvince = (data: any) => api.create(ADD_PROVINCE, data);

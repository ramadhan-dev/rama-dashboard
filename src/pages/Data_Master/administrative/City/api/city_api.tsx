import { API_URL } from "#/Common/constants/env";
import { APIClient } from "#/helpers/api_helper";
import { masterAdministrative, paginationPayload } from "#/interfaces/common";
import { UploadProps } from "../store/city.asyncAction";

export const ADD_CITY = API_URL + "/city/create-city";
export const GET_ALL_CITY = API_URL + "/city/get-all-city";
export const GET_ONE_CITY = API_URL + "/city/get-city";
export const UPDATE_CITY = API_URL + "/city/update-city";
export const DELETE_CITY = API_URL + "/city/delete-city";
export const GET_CITY_OPTIONS = API_URL + "/city/get-city-options";

const api = new APIClient();

export const AddNewCity = (data: masterAdministrative) => api.create(ADD_CITY, data);
export const AllCity = (payload: paginationPayload) => api.get(GET_ALL_CITY, payload);
export const OneCity = (id: string) => api.get(GET_ONE_CITY, { id });
export const updateCityApi = (payload: UploadProps) => api.put(UPDATE_CITY, payload);
export const deleteCityApi = (id: string | undefined) => api.delete(DELETE_CITY, { data: { id } });
export const cityOptions = (id: string | undefined) => api.get(GET_CITY_OPTIONS, { id })

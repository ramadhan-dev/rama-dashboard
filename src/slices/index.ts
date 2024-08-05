import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import { loginReducer } from "#/pages/Authentication/store/login.slice";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

// userProfile
import EcommerceReducer from "./ecommerce/reducer";

import { ProvinceReducer } from "#/pages/Data_Master/administrative/Province/store/province.slice";
import { CityReducer } from "#/pages/Data_Master/administrative/City/store/city.slice";
import { DistrictReducer } from "#/pages/Data_Master/administrative/District/store/district.slice";
import { SubDistrictReducer } from "#/pages/Data_Master/administrative/Sub_District/store/subdistrict.slice";



export const rootReducer: any = combineReducers({
	Layout: LayoutReducer,
	Auth: loginReducer,
	Profile: ProfileReducer,
	Ecommerce: EcommerceReducer,
	Province: ProvinceReducer,
	City: CityReducer,
	District: DistrictReducer,
	SubDistrict: SubDistrictReducer
});

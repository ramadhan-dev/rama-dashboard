import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import { loginReducer } from "#/pages/Authentication/store/login.slice";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

// userProfile
import EcommerceReducer from "./ecommerce/reducer";

import ProvinceReducer from "./administrative/province/reducer";



export const rootReducer: any = combineReducers({
	Layout: LayoutReducer,
	Auth: loginReducer,
	Profile: ProfileReducer,
	Ecommerce: EcommerceReducer,
	Province: ProvinceReducer
});

import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import LoginReducer from "./auth/login/reducer";

// register
import RegisterReducer from "./auth/register/reducer";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

// userProfile
import EcommerceReducer from "./ecommerce/reducer";

import ProvinceReducer from "./administrative/province/reducer";



export const rootReducer:any = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Register: RegisterReducer,
    Profile: ProfileReducer,
		Ecommerce: EcommerceReducer,
		Province: ProvinceReducer
});

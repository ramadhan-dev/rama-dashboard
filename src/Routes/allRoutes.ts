// dashboard
import { lazy } from "react";

const Ecommerce = lazy(() => import("#/pages/Dashboards/Ecommerce"));
const UserProfile = lazy(() => import("#/pages/Authentication/UserProfile"));
const Login = lazy(() => import("#/pages/Authentication/Login"));
const Logout = lazy(() => import("#/pages/Authentication/LogOut"));
const Register = lazy(() => import("#/pages/Authentication/Register"));
const LandingPage = lazy(() => import("#/pages/Landing"));
const CityComponent = lazy(() => import("#/pages/Data_Master/administrative/City"));
const DistrictComponent = lazy(() => import("#/pages/Data_Master/administrative/District"));
const ProvinceComponent = lazy(() => import("#/pages/Data_Master/administrative/Province"));
const SubDistrictComponent = lazy(() => import("#/pages/Data_Master/administrative/Sub_District"));

interface RouteObject {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
}

// Use React.ComponentType to specify the type of the component

const authProtectedRoutes: Array<RouteObject> = [
	{ path: "/dashboard", component: Ecommerce },
	{ path: "/data-master/sub-district", component: SubDistrictComponent },
	{ path: "/data-master/district", component: DistrictComponent },
	{ path: "/data-master/city", component: CityComponent },
	{ path: "/data-master/province", component: ProvinceComponent },
	{ path: "/user-profile", component: UserProfile },
];

const publicRoutes = [
	{ path: "/", component: LandingPage },
	{ path: "/login", component: Login },
	{ path: "/logout", component: Logout },
	{ path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes };

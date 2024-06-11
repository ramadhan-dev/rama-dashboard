import { lazy } from "react";

// dashboard
const Ecommerce = lazy(() => import("#/pages/Dashboards/Ecommerce"));
const UserProfile = lazy(() => import("#/pages/Authentication/UserProfile"));
const Login = lazy(() => import("#/pages/Authentication/Login"));
const Logout = lazy(() => import("#/pages/Authentication/LogOut"));
const Register = lazy(() => import("#/pages/Authentication/Register"));
const LandingPage = lazy(() => import("#/pages/Landing"));
const CityComponent = lazy(() => import("#/pages/Dashboards/Data_Master/City"));
const DistrictComponent = lazy(() => import("#/pages/Dashboards/Data_Master/District"));
const ProvinceComponent = lazy(() => import("#/pages/Dashboards/Data_Master/Province"));
const SubDistrictComponent = lazy(() => import("#/pages/Dashboards/Data_Master/Sub_District"));

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

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

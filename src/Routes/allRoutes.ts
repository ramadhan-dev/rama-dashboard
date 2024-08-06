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

/**
 * Employee
 */
const EmployeeComponent = lazy(() => import("#/pages/Data_Master/employee/employee"));



/**
 * Product
 */
const ProductBrandComponent = lazy(() => import("#/pages/Data_Master/product/brand"));
const ProductCategoryComponent = lazy(() => import("#/pages/Data_Master/product/category"));
const ProductSizeComponent = lazy(() => import("#/pages/Data_Master/product/size"));
const ProductStatusComponent = lazy(() => import("#/pages/Data_Master/product/status"));


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

	// Employee
	{ path: "/user-profile", component: UserProfile },
	{ path: "/data-master/employee", component: EmployeeComponent },

	// Product
	{ path: "/data-master/product", component: UserProfile },
	{ path: "/data-master/product-brand", component: ProductBrandComponent },
	{ path: "/data-master/product-category", component: ProductCategoryComponent },
	{ path: "/data-master/product-size", component: ProductSizeComponent },
	{ path: "/data-master/product-status", component: ProductStatusComponent },
	{ path: "/data-master/product-type", component: UserProfile },
	{ path: "/data-master/product-visibility", component: UserProfile },

];

const publicRoutes = [
	{ path: "/", component: LandingPage },
	{ path: "/login", component: Login },
	{ path: "/logout", component: Logout },
	{ path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes };

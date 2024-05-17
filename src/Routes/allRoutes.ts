// dashboard
import Ecommerce from "#/pages/Dashboards/Ecommerce";
import UserProfile from "#/pages/Authentication/UserProfile";
import Login from "#/pages/Authentication/Login";
import Logout from "#/pages/Authentication/LogOut";
import Register from "#/pages/Authentication/Register";
import LandingPage from "#/pages/Landing";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/dashboard", component: Ecommerce },
  { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [

  // authentication
	{ path: "/", component: LandingPage },
	{ path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

]

export { authProtectedRoutes, publicRoutes };

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAction } from './store/login.slice';

const Logout: React.FC = () => {

    const dispatch = useDispatch<any>();
		const { isUserLogout } = useSelector((state: any) => state?.masterState?.Auth);


    React.useEffect(() => {
			dispatch(loginAction.setLogoutUser(true));
    }, [dispatch]);

    return isUserLogout ? <Navigate to="/login" replace={true} /> : null;
}

export default Logout;

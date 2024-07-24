import withRouter from '#/Common/withRouter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLayoutMode } from "#/slices/thunk";
import { Navigate } from "react-router-dom";
import { getAccessToken } from '#/helpers/jwt-token-access/accessToken';
import { ACCESS_KEY } from '#/Common/constants/env';

const NonAuthLayout = (props: any) => {
	const targetPath = props?.router?.location?.pathname

	if (getAccessToken(ACCESS_KEY) !== undefined && targetPath !== '/logout') {
		return <Navigate to={{ pathname: "/dashboard" }} />;
	} else {
	}

  const dispatch = useDispatch<any>();
	const { layoutModeType } = useSelector((state: any) => state?.masterState?.Layout);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [layoutModeType, dispatch]);

  useEffect(() => {
		document.documentElement.classList.add("light", "scroll-smooth", "group");
    return () => {
      document.documentElement.classList.remove("light", "scroll-smooth", "group");
    }
  }, [])

  return (
    <React.Fragment>{props.children}</React.Fragment>
  );
}

export default withRouter(NonAuthLayout)

import withRouter from '#/Common/withRouter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { changeLayoutMode } from "#/slices/thunk";
import { Navigate } from "react-router-dom";
import { getAccessToken } from '#/helpers/jwt-token-access/accessToken';

const NonAuthLayout = (props: any) => {
	const targetPath = props?.router?.location?.pathname

	if (getAccessToken('KEY') !== undefined && targetPath !== '/logout') {
		console.log(222);

		return <Navigate to={{ pathname: "/dashboard" }} />;
	} else {
	}

  const dispatch = useDispatch<any>();

  const selectProperties = createSelector(
    (state: any) => state.Layout,
    (layout) => ({
      layoutModeType: layout.layoutModeType,
    })
  );
  const { layoutModeType, } = useSelector(selectProperties);
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

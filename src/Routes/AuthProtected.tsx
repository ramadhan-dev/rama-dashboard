import { setAuthorization } from "#/helpers/api_helper";
import { getAccessToken } from "#/helpers/jwt-token-access/accessToken";
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthProtectedProps {
  children: ReactNode;
}

const AuthProtected: React.FC<AuthProtectedProps> = ({ children }) => {

  if (getAccessToken('KEY') === undefined) {
    return <Navigate to={{ pathname: "/login" }} />;
  } else{
		setAuthorization(getAccessToken('KEY'))
	}

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProtected;

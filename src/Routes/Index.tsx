import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from './allRoutes';
import Layout from '#/Layout';
import NonAuthLayout from "#/Layout/NonLayout"
import AuthProtected from './AuthProtected';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Routes>
        {authProtectedRoutes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <AuthProtected>
                <Layout>
									<Suspense fallback={<>loading...</>}>
										<route.component />
									</Suspense>
                </Layout>
              </AuthProtected>
            }
          />
        ))}
        {publicRoutes.map((route: any, idx: number) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <NonAuthLayout>
								<Suspense fallback={<>loading...</>}>
									<route.component />
								</Suspense>
              </NonAuthLayout>
            } />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;

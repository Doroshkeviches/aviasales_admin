import React, { FC, Suspense, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import PageHeaderComp from "./components/page-header.comp";
import { useAppDispatch, useAppSelector } from "src/storeTypes";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return true ? (
    <>
      <PageHeaderComp />
      <Suspense fallback={<div />}>
        <Element />
      </Suspense>
    </>
  ) : (
    <Navigate to={"/admin/auth/signup"} />
  );
};

// ======= public route ======= //
const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <>
    <PageHeaderComp />
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  </>
);

// ======= pages ======= //
const AuthRoutes = React.lazy(() => import("./app/auth/index"))



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/auth/*' element={<PublicRoute element={AuthRoutes} />} />
      <Route path='/*' element={<PublicRoute element={() => <div>NO SUCH ROUTE</div>} />} />
    </Routes>
  );
};

export default AppRoutes;

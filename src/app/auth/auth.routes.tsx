import React, { FC, PropsWithChildren, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};

// ======= pages ======= //
const LoginPage = React.lazy(() => import("./login-page"))


const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/signin"} element={<Suspended element={LoginPage} />} />

    </Routes>
  );
};

export default AuthRoutes;
import React, { FC, PropsWithChildren, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    true ?  //TODO поверка на роль
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
    : 
    <Navigate to={"/admin/auth/signup"} />
    
  );
};

// ======= pages ======= //
const UsersPage = React.lazy(() => import("./users-page"))


const UsersRoutes: FC = () => {
  return (
    <Routes>
      <Route path={""} element={<Suspended element={UsersPage} />} />

    </Routes>
  );
};

export default UsersRoutes;
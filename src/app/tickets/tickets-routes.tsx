import React, { FC, PropsWithChildren, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    true ? //TODO поверка на роль
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
    : 
    <Navigate to={"/admin/auth/signup"} />

  );
};

// ======= pages ======= //
const TicketPage = React.lazy(() => import("./tickets-page"))


const TicketRoutes: FC = () => {
  return (
    <Routes>
      <Route path={""} element={<Suspended element={TicketPage} />} />

    </Routes>
  );
};

export default TicketRoutes;
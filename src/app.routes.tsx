import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
// import PageHeaderComp from "./components/page-header.comp";
import { useAppDispatch, useAppSelector } from "src/storeTypes";
import { sessionSelector } from "./app/auth/store/auth.selector";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  const session = useAppSelector(sessionSelector)
  // session?.role_type === "Admin"
  return true ? (
    <>
      {/* <PageHeaderComp /> */}
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
    {/* <PageHeaderComp /> */}
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  </>
);

// ======= pages ======= //
const AuthRoutes = React.lazy(() => import("./app/auth/index"))
const TicketRoutes = React.lazy(() => import("./app/tickets/index"))
const UsersRoutes = React.lazy(() => import("./app/users/index"))
const FlightsRoutes = React.lazy(() => import("./app/flights/flights.routes"))

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path='/admin/auth/*' element={<PublicRoute element={AuthRoutes} />} />
      {/* PUBLIC */}
      <Route path='/admin/flights/*' element={<PublicRoute element={FlightsRoutes} />} />

      {/* PRIVATE */}
      <Route path='/admin/tickets/*' element={<PrivateRoute element={TicketRoutes} />} />
      {/* PRIVATE */}
      <Route path='/admin/users/*' element={<PrivateRoute element={UsersRoutes} />} />

      {/* DEFAULT */}
      {/* <Route path='/*' element={<PublicRoute element={() => <div>NO SUCH ROUTE</div>} />} /> */}
      <Route path='/*' element={<Navigate to="/admin/flights" />} />
    </Routes>
  );
};

export default AppRoutes;

import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
// import PageHeaderComp from "./components/page-header.comp";
import { useAppSelector } from "src/storeTypes";
import { sessionSelector } from "./app/auth/store/auth.selector";
import { Container } from "@mui/material";

// ======= admin private route ======= //
const AdminPrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  const session = useAppSelector(sessionSelector)
  return session?.role_type === "Admin" ? (
    <>
      {/* <PageHeaderComp /> */}
      <Suspense fallback={<div />}>
        <Element />
      </Suspense>
    </>
  ) : (
    <Navigate to={"/admin/flights"} />
  );
};

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  const session = useAppSelector(sessionSelector)
  return session ? (
    <>
      {/* <PageHeaderComp /> */}
      <Suspense fallback={<div />}>
        <Element />
      </Suspense>
    </>
  ) : (
    <Navigate to={"/admin/auth/signin"} />
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
const FlightsRoutes = React.lazy(() => import("./app/flights/index"))

const AppRoutes = () => {
  return (
    <Container>
      <Routes>
        {/* PUBLIC */}
        <Route path='/admin/auth/*' element={<PublicRoute element={AuthRoutes} />} />

        {/* PRIVATE */}
        <Route path='/admin/flights/*' element={<PrivateRoute element={FlightsRoutes} />} />
        <Route path='/admin/tickets/*' element={<PrivateRoute element={TicketRoutes} />} />

        {/* ADMIN PRIVATE */}
        <Route path='/admin/users/*' element={<AdminPrivateRoute element={UsersRoutes} />} />

        {/* DEFAULT */}
        <Route path='/*' element={<Navigate to="/admin/flights" />} />
      </Routes>
    </Container>
  );
};

export default AppRoutes;

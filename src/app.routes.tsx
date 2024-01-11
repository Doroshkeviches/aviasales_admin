import React, { FC, Suspense, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import PageHeaderComp from "./components/page-header.comp";
import { useAppDispatch, useAppSelector } from "src/storeTypes";
import { sessionSelector } from "./app/auth/store/auth.selector";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  const session = useAppSelector(sessionSelector)
  return session?.role_type === "Admin" ? (
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
const TicketRoutes = React.lazy(() => import("./app/tickets/index"))
const UsersRoutes = React.lazy(() => import("./app/users/index"))
const FlightsRoutes = React.lazy(() => import("./app/flights/flights.routes"))
const ChatRoutes = React.lazy(() => import("./app/chat/chat.routes"))




const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/auth/*' element={<PublicRoute element={AuthRoutes} />} />
      <Route path='/admin/tickets/*' element={<PublicRoute element={TicketRoutes} />} />
      <Route path='/admin/flights/*' element={<PublicRoute element={FlightsRoutes} />} />
      <Route path='/admin/users/*' element={<PrivateRoute element={UsersRoutes} />} />
      <Route path='/admin/chat/*' element={<PublicRoute element={ChatRoutes} />} />


      <Route path='/*' element={<PublicRoute element={() => <div>NO SUCH ROUTE</div>} />} />
    </Routes>
  );
};

export default AppRoutes;

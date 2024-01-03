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
const OrdersPage = React.lazy(() => import("./orders-page"))


const OrdersRoutes: FC = () => {
  return (
    <Routes>
      <Route path={""} element={<Suspended element={OrdersPage} />} />
    </Routes>
  );
};

export default OrdersRoutes;
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
const ChatPage = React.lazy(() => import("./chat-page"));
const ChatRequestPage = React.lazy(() => import("./chat-requests.page"));


const ChatRoutes: FC = () => {
  return (
    <Routes>
      <Route path={""} element={<Suspended element={ChatPage} />} />
        <Route path={"/requests"} element={<Suspended element={ChatRequestPage} />} />
    </Routes>
  );
};

export default ChatRoutes;
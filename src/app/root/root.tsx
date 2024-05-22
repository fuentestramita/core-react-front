import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import NotFound from "../not-found";
import React, { Suspense } from "react";
import Loading from "../../components/loading";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import createStore from "react-auth-kit/createStore";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

console.log(store);

const Root = () => {
  const LazyMaestro = React.lazy(() => import("../maestro/page"));
  const LazyPrimeraInscripcion = React.lazy(() => import("../primera-inscripcion/page"));
  const LazyLoginPage = React.lazy(() => import("../login/page"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth fallbackPath="/login">
          <Layout>
            <div></div>
          </Layout>
        </RequireAuth>
      ),
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyLoginPage />
        </Suspense>
      ),
    },
    {
      path: "/maestro",
      element: (
        <Suspense fallback={<Loading />}>
          <RequireAuth fallbackPath="/login">
            <LazyMaestro />
          </RequireAuth>
        </Suspense>
      ),
    },
    {
      path: "/primera-inscripcion",
      element: (
        <Suspense fallback={<Loading />}>
          <RequireAuth fallbackPath="/login">
            <LazyPrimeraInscripcion />
          </RequireAuth>
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <AuthProvider store={store}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default Root;

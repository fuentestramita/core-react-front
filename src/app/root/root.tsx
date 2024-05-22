import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import NotFound from "../not-found";
import React, { Suspense } from "react";
import Loading from "../../components/loading";
import { AuthProvider, RequireAuth } from "react-auth-kit";

const Root = () => {
  const LazyMaestro = React.lazy(() => import("../maestro/page"));
  const LazyPrimeraInscripcion = React.lazy(() => import("../primera-inscripcion/page"));
  const LazyLoginPage = React.lazy(() => import("../login/page"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth loginPath="/login">
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
          <RequireAuth loginPath="/login">
            <LazyMaestro />
          </RequireAuth>
        </Suspense>
      ),
    },
    {
      path: "/primera-inscripcion",
      element: (
        <Suspense fallback={<Loading />}>
          <RequireAuth loginPath="/login">
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
    <AuthProvider authType="cookie" authName="_auth" cookieDomain={window.location.hostname} cookieSecure={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default Root;

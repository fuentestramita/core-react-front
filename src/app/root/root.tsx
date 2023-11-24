import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import NotFound from "../not-found";
import React, { Suspense } from "react";
import Loading from "../../components/loading";

const Root = () => {
  const LazyMaestro = React.lazy(() => import("../maestro/page"));
  const LazyPrimeraInscripcion = React.lazy(() => import("../primera-inscripcion/page"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <div></div>
        </Layout>
      ),
    },
    {
      path: "/maestro",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMaestro />
        </Suspense>
      ),
    },
    {
      path: "/primera-inscripcion",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyPrimeraInscripcion />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;

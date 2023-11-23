import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MaestroPage from "../maestro/page";
import Layout from "../layout";
import NotFound from "../not-found";
import PrimeraInscripcionPage from "../primera-inscripcion/page";

const Root = () => {
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
      element: <MaestroPage />,
    },
    {
      path: "/primera-inscripcion",
      element: <PrimeraInscripcionPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;

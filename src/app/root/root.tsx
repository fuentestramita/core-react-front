import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MaestroPage from "../maestro/page";
import Layout from "../layout";
import NotFound from "../not-found";

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
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Root;

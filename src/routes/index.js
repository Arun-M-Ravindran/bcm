import Home from "../pages/Home";
import DataMaping from "../pages/datamaping/DataMaping";
import Products from "../pages/Products";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "maping",
    element: <DataMaping />
  },
];

export default mainRoutes;

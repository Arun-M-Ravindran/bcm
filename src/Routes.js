import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
// import DataMaping from "./pages/DataMaping";
import DataMaping from "./pages/datamaping/DataMaping";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/maping" element={<DataMaping />} />
    </BaseRoutes>
  );
}

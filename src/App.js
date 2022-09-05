import {useRoutes } from "react-router-dom";

import routes from "./routes/index";
import Routes from "./Routes";
import Header from "./component/Header";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;

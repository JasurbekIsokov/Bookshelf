import { Suspense } from "react";

import { Loader } from "./components";
import { Header, MainLayout } from "./layouts";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div id="app">
      <Suspense fallback={<Loader />}>
        <MainLayout header={<Header />} content={<AppRouter />} />
      </Suspense>
    </div>
  );
};

export default App;

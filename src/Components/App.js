import React, { Suspense, lazy, useState } from "react";
import { Route, Switch } from "react-router-dom";

const Sidebar = lazy(() => import("./Sidebar/Sidebar"));
const Home = lazy(() => import("./Home"));

function App() {
  const [sideBarCollapsed, collapse] = useState(true);

  const collapseSidebar = () => {
    collapse(!sideBarCollapsed);
    console.log(sideBarCollapsed);
  };

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <div className="z-10 font-madurai bg-white">
        <Sidebar
          isCollapsed={sideBarCollapsed}
          collapseSidebar={collapseSidebar}
        />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;

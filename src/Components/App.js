import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";

import Sidebar from "./Sidebar/Sidebar";
import Backdrop from "./Sidebar/Backdrop";

function App() {
  const [sideBarCollapsed, collapse] = useState(true);

  const collapseSidebar = () => {
    collapse(!sideBarCollapsed);
    console.log(sideBarCollapsed);
  };

  return (
    <div className="z-10 font-madurai bg-white">
      <Sidebar
        isCollapsed={sideBarCollapsed}
        collapseSidebar={collapseSidebar}
      />
      <Backdrop collapseSidebar={collapseSidebar} />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";
import PushableDimSidebar from "./PushableDimSidebar";

// contains basic layout like Navbar, Sidebar, Body etc
const BasicLayout = () => {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  return (
    <React.Fragment>
      <Navbar setSidebarVisible={setSidebarVisible} />
      <PushableDimSidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
    </React.Fragment>
  );
};

export default BasicLayout;

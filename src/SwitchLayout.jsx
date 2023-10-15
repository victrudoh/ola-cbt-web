// import React from "react";

// Layouts
import AppLayout from "./components/layouts/appLayout/AppLayout";
// import AuthLayout from "./components/layouts/authLayout/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";

const SwitchLayout = () => {
  const token = localStorage.getItem("nu-token");

  const SelectedDisplay = () => {
    if (!token) {
      // return <AuthLayout />;
      return <UserLayout />;
    } else {
      return <AppLayout />;
    }
  };

  return <SelectedDisplay />;
};

export default SwitchLayout;

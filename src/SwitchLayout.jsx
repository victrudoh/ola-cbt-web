// import AppContext from "../../context/AppContext";

// Layouts
import AdminLayout from "./components/layouts/AdminLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";

const SwitchLayout = () => {
  // const { activeUser, topbarTitle } = useContext(AppContext);

  const activeUser = "admin";

  const token = localStorage.getItem("nu-token");

  const SelectedDisplay = () => {
    if (!token) {
      // return <AuthLayout />;
      return <AdminLayout />;
    } else if (activeUser === "user") {
      return <UserLayout />;
    } else if (activeUser === "admin") {
      return <AdminLayout />;
    } else {
      return <AuthLayout />;
    }
  };

  return <SelectedDisplay />;
};

export default SwitchLayout;

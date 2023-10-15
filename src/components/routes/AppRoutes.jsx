import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "../../context/AppContext";

// components
import Layed from "../Layed";
// import Error404 from "../../pages/error404/Error404";

const AppRoutes = () => {
  const { activeUser, topbarTitle } = useContext(AppContext);
  console.log(
    "🚀 ~ file: AppRoutes.jsx:11 ~ AppRoutes ~ topbarTitle:",
    topbarTitle
  );

  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        {/* Admin */}
        {activeUser?.role === "admin" && (
          <>
            {/* <Route index element={<Caregivers />} /> */}
            {/* <Route path="/admin/caregivers" element={<Caregivers />} /> */}
          </>
        )}

        {/* Care Giver */}
        {activeUser?.role === "user" && (
          <>
            {/* <Route index element={<CheckInOut />} /> */}
            {/* <Route path="/caregiver/residents" element={<CGResidents />} /> */}
          </>
        )}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
// import SelectCourse from "../../pages/user/selectCourse";
import TestCompleted from "../../pages/user/test/TestCompleted";
import ErrorPage from "../../pages/ErrorPage";

import AllStudents from "../../pages/admin/students/AllStudents";
import OneStudent from "../../pages/admin/students/OneStudent";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<AllStudents />} />
        <Route path="/admin/students" element={<AllStudents />} />
        <Route path="/admin/students/one" element={<OneStudent />} />
        <Route path="/admin/students/add" element={<TestCompleted />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;

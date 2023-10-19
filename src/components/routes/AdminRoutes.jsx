import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
// import SelectCourse from "../../pages/user/selectCourse";
import TestCompleted from "../../pages/user/test/TestCompleted";
import ErrorPage from "../../pages/ErrorPage";

import AllStudents from "../../pages/admin/students/AllStudents";
import OneStudent from "../../pages/admin/students/OneStudent";
import AllCourses from "../../pages/admin/courses/AllCourses";
import AddCourse from "../../pages/admin/courses/AddCourse";
import OneCourse from "../../pages/admin/courses/OneCourse";
import AddQuestion from "../../pages/admin/courses/AddQuestion";
import EditQuestion from "../../pages/admin/courses/EditQuestion";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<AllCourses />} />
        <Route path="/admin/students" element={<AllStudents />} />
        <Route path="/admin/students/one" element={<OneStudent />} />
        <Route path="/admin/students/add" element={<TestCompleted />} />
        <Route path="/admin/courses" element={<AllCourses />} />
        <Route path="/admin/courses/add" element={<AddCourse />} />
        <Route path="/admin/courses/one" element={<OneCourse />} />
        <Route path="/admin/questions/add" element={<AddQuestion />} />
        <Route path="/admin/questions/edit" element={<EditQuestion />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;

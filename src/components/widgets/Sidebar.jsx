// logo
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("courses");
  return (
    <div className="flex flex-col w-[180px] bg-white h-screen shadow-md">
      {/* Logo in the top-left corner */}
      <div className="w-full flex items-center justify-center p-4 mt-2 mb-10">
        {/* <span className="font-poppins text-2xl font-semibold leading-36 tracking-tight text-green-800">
          <span className="relative inline-block before:absolute before:content-[''] before:w-3 before:h-3 before:-top-1 before:-left-2 before:bg-teal-400 before:rounded-full"></span>
          <span className="relative inline-block after:absolute after:content-[''] after:w-3 after:h-3 after:-bottom-1 after:-right-2 after:bg-teal-400 after:rounded-full"></span>
          logo
        </span> */}
        <img
          src={logo} // Replace with your actual logo image source
          alt="Logo"
          className="w-16 h-16" // Adjust the width and height as needed
        />
      </div>
      {/* Menu Items */}
      <div className="my-5 w-full flex flex-col gap-4">
        <NavLink
          onClick={() => setActiveTab("courses")}
          activeClassName="active"
          exact
          to="/admin/courses"
          className={
            activeTab === "courses"
              ? "w-full p-3 flex items-center justify-evenly text-white bg-teal-600 transition-all duration-300 ease-in-out rounded-tr rounded-br ml-3 no-underline hover:text-white"
              : "w-full p-3 flex items-center justify-evenly text-white bg-teal-500 transition-all duration-300 ease-in-out rounded-tr rounded-br hover:text-white hover:bg-teal-600 hover:ml-3"
          }
        >
          <h3>Courses</h3>
        </NavLink>
        <NavLink
          onClick={() => setActiveTab("students")}
          activeClassName="active"
          exact
          to="/admin/students"
          className={
            activeTab === "students"
              ? "w-full p-3 flex items-center justify-evenly text-white bg-teal-600 transition-all duration-300 ease-in-out rounded-tr rounded-br ml-3 no-underline hover:text-white"
              : "w-full p-3 flex items-center justify-evenly text-white bg-teal-500 transition-all duration-300 ease-in-out rounded-tr rounded-br hover:text-white hover:bg-teal-600 hover:ml-3"
          }
        >
          <h3>Students</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

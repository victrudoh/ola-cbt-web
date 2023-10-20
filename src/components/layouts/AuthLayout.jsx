// routes
import AuthRoutes from "../routes/AuthRoutes";

import logo from "../../assets/images/logo.jpeg";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-teal-100">
      <div className="w-full flex justify-between items-center p-6">
        <div className="absolute top-3 left-5 p-4">
          <img
            src={logo} // Replace with your actual logo image source
            alt="Logo"
            className="w-16 h-16" // Adjust the width and height as needed
          />
        </div>
        <div></div>
        <div></div>
        <span className="absolute top-7 right-5 rounded-lg p-2 px-4 flex items-center justify-center outline-none font-semibold bg-teal-700 text-white">
          School of Midwifery Final Exams
        </span>
      </div>

      <div className="m-auto w-[100%] min-h-[60%] flex flex-col justify-center">
        <AuthRoutes />
      </div>
    </div>
  );
};

export default AuthLayout;

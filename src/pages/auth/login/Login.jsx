import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();

  const gotoRegister = async () => {
    navigate("/register");
  };

  const { loading, setLoading } = useContext(AppContext);

  const [loginDetails, setLoginDetails] = useState({});

  const [switchLayout, setSwitchLayout] = useState("user");

  const Loginhandler = async (e) => {
    setLoading(true);
    console.log("LoginDetails", loginDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cbt-api-a37x.onrender.com/api/auth/login",
        loginDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      setLoading(false);
      const token = response.data.data.loginDetails.token;
      const userId = response.data.data.loginDetails.user._id;
      if (response.status === 200) {
        success("Login Successfull");
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        navigate("/");
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
      error(err.response.data.message);
      error(err.response.data.error);
      setLoading(false);
    }
  };

  const onchangeHandler = async (e) => {
    e.persist();
    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      [e.target.name]: e.target.value,
    }));
    console.log(
      "🚀 ~ file: AddCourse.jsx:53 ~ setLoginDetails ~ LoginDetails:",
      loginDetails
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-teal-100">
      {/* Content */}
      {/* Rotated rectangle */}
      <div
        className="absolute top-1/4 left-[28%] w-[40%] h-[60%] rounded-[8px] bg-gradient-to-r from-green-600 to-green-800 shadow-xl"
        style={{
          transform: "rotate(-8deg)",
          transformOrigin: "top left",
        }}
      ></div>
      {/* content main */}
      <div className="bg-white m-auto w-[40%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
        {/* Title part */}
        <div className="flex flex-col items-center justify-center text-teal-800 w-[50%]  p-2 ">
          <h4 className="text-teal-800 font-poppins text-xl font-semibold leading-36 tracking-normal mb-4">
            Sign In
          </h4>
          <div className="w-full flex gap-4 items-center justify-between">
            <span
              onClick={() => setSwitchLayout("user")}
              className={
                switchLayout === "user"
                  ? "font-poppins text-sm font-normal leading-5 tracking-normal text-center pb-1 border-b-[2.5px] border-teal-600 cursor-pointer"
                  : "font-poppins text-sm font-normal leading-5 tracking-normal text-center pb-1 border-b-[2.5px] cursor-pointer"
              }
            >
              Student Login
            </span>
            <span
              onClick={() => setSwitchLayout("admin")}
              className={
                switchLayout === "admin"
                  ? "font-poppins text-sm font-normal leading-5 tracking-normal text-center pb-1 border-b-[2.5px] border-teal-600 cursor-pointer"
                  : "font-poppins text-sm font-normal leading-5 tracking-normal text-center pb-1 border-b-[2.5px] cursor-pointer"
              }
            >
              Admin Login
            </span>
          </div>
        </div>
        {/* form part */}
        <form
          onSubmit={Loginhandler}
          className="w-[80%] my-6 flex flex-col gap-[20px]"
        >
          {switchLayout === "admin" ? (
            <>
              {/* pair: email */}
              <div className="flex flex-col items-start justify-center">
                <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
                  Email
                </span>
                <input
                  className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
                  type="email"
                  placeholder="johndoe@example.com"
                  name="email"
                  onChange={onchangeHandler}
                />
              </div>
              {/* pair: password */}
              <div className="flex flex-col items-start justify-center">
                <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
                  Password
                </span>
                <input
                  className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
                  type="password"
                  placeholder="* * * * * *"
                  name="password"
                  onChange={onchangeHandler}
                />
              </div>
              {/* button */}
              <div className="w-full flex items-center justify-center my-4">
                {loading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  <>
                    <div className="w-full flex flex-col gap-3 items-center justify-center">
                      <button
                        className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg"
                        type="submit"
                      >
                        Sign In
                      </button>
                      <span
                        onClick={gotoRegister}
                        className="mx-auto text-teal-700 text-sm cursor-pointer hover:text-teal-400"
                      >
                        Register
                      </span>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              {/* pair: matric_no */}
              <div className="flex flex-col items-start justify-center">
                <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
                  Matric Number
                </span>
                <input
                  className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
                  type="matric_no"
                  placeholder="OLA-001-NUR"
                  name="matric_no"
                  onChange={onchangeHandler}
                />
              </div>
              {/* pair: password */}
              <div className="flex flex-col items-start justify-center">
                <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
                  Password
                </span>
                <input
                  className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
                  type="password"
                  placeholder="* * * * * *"
                  name="password"
                  onChange={onchangeHandler}
                />
              </div>
              {/* button */}
              <div className="w-full flex items-center justify-center my-4">
                {loading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  <>
                    <div className="w-full flex flex-col gap-3 items-center justify-center">
                      <button
                        className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg"
                        type="submit"
                      >
                        Sign In
                      </button>
                      <span
                        onClick={gotoRegister}
                        className="mx-auto text-teal-700 text-sm cursor-pointer hover:text-teal-400"
                      >
                        Register
                      </span>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(AppContext);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const Loginhandler = async (e) => {
    setLoading(true);
    // console.log("LoginDetails", loginDetails);
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
      {/* Logo in the top-left corner */}
      <div className="absolute top-3 left-5 p-4">
        {/* <span className="font-poppins text-2xl font-semibold leading-36 tracking-tight text-green-800">
          <span className="relative inline-block before:absolute before:content-[''] before:w-3 before:h-3 before:-top-1 before:-left-2 before:bg-teal-400 before:rounded-full"></span>
          <span className="relative inline-block after:absolute after:content-[''] after:w-3 after:h-3 after:-bottom-1 after:-right-2 after:bg-teal-400 after:rounded-full"></span>
          logo
        </span> */}

        {/* <img
          src={logo} // Replace with your actual logo image source
          alt="Logo"
          className="w-16 h-16" // Adjust the width and height as needed
        /> */}
      </div>

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
        <div className="flex flex-col items-center justify-center text-teal-800 w-[50%] border-b-[2.5px] p-2 border-teal-600">
          <h4 className="text-teal-800 font-poppins text-xl font-semibold leading-36 tracking-normal">
            Sign In
          </h4>
          <span className="font-poppins text-sm font-normal leading-5 tracking-normal text-center">
            Input your details to get started
          </span>
        </div>
        {/* form part */}
        <div className="w-[80%] my-6 flex flex-col gap-[20px]">
          {/* pair: first name */}
          {/* <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              First Name
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="text"
              placeholder="John"
              name="firstName"
            />
          </div> */}
          {/* pair: last name */}
          {/* <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              Last Name
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="text"
              placeholder="Doe"
              name="lastName"
            />
          </div> */}
          <form onSubmit={Loginhandler}>
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
                  <button
                    className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg"
                    type="submit"
                  >
                    Sign In
                  </button>
                </>
              )}

              {/* <a
              href="/user/select-course"
              className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 no-underline hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg hover:text-white"
            >
              Sign In
            </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState, useContext } from "react";
// import AppContext from "../../../context/AppContext";
// import { NavLink, useNavigate } from "react-router-dom";
// import { success, error } from "../../../helpers/Alert";
// import axios from "axios";

// // Styles
// import {
//   Left,
//   Right,
//   Wrapper,
//   Content,
//   Title,
//   Overlay,
//   Register,
//   LogoIsh,
// } from "./Login.Styles";

// // widgets
// import ButtonWidget from "../../../components/widgets/buttonWidget/ButtonWidget";
// import Inputwidget from "../../../components/widgets/inputWidget/Inputwidget";
// import { CircleSpinner } from "../../../components/widgets/circleSpinner/CircleSpinner.Styles";

// // left image
// import bg from "../../../assets/images/login/login-side-img.png";

// const Login = () => {
//   const { authLoading, setAuthLoading } = useContext(AppContext);

//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const onchangeHandler = (e) => {
//     e.persist();
//     setLoginDetails((item) => ({
//       ...item,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       setAuthLoading(true);
//       const response = await axios.post(
//         "https://wecare-api.onrender.com/api/auth/login",
//         loginDetails,
//         {
//           headers: {
//             "content-type": "application/json",
//           },
//         }
//       );
//       // console.log(
//       //   "🚀 ~ file: Login.jsx ~ line 58 ~ submit ~ response",
//       //   response
//       // );
//       setAuthLoading(false);
//       if (response.status === 200) {
//         success("Login Successful");
//         const token = response.data.data.token;
//         const userId = response.data.data.user._id;
//         localStorage.setItem("nu-token", token);
//         localStorage.setItem("userId", userId);
//         navigate("/");
//         window.location.reload(false);
//       }
//     } catch (err) {
//       console.log(err);
//       if (err.response.status === 400) {
//         error("Invalid Credentials");
//         setAuthLoading(false);
//       }
//       setAuthLoading(false);
//     }
//   };

//   return (
//     <>
//       <Wrapper>
//         <Left bg={bg}>
//           <Overlay>
//             <LogoIsh>We Care</LogoIsh>
//           </Overlay>
//         </Left>
//         <Right>
//           <form onSubmit={submit}>
//             <Content>
//               <Title>Login</Title>
//               <Inputwidget
//                 type={"email"}
//                 placeholder={"e.g SarahBanks07"}
//                 label={"email"}
//                 name={"email"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={loginDetails.email}
//               />
//               <Inputwidget
//                 type={"password"}
//                 placeholder={"At least 8 characters"}
//                 label={"Password"}
//                 name={"password"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={loginDetails.password}
//               />
//               {authLoading ? (
//                 <CircleSpinner />
//               ) : (
//                 <ButtonWidget text={"Login"} />
//               )}
//               <Register>
//                 Dont't have an account?
//                 <NavLink to="/register">Register</NavLink>
//               </Register>
//             </Content>
//           </form>
//         </Right>
//       </Wrapper>
//     </>
//   );
// };

// export default Login;

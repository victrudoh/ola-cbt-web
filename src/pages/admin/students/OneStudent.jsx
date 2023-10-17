import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentDetails from "./StudentDetails";
import StudentResult from "./StudentResult";

const OneStudent = () => {
  const [switchPanel, setSwitchPanel] = useState("details");
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/admin/students");
  };

  return (
    <>
      <div className="flex flex-col justify-between items-end w-full mt-10">
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 mr-14"
          onClick={goBack}
        >
          Back
        </span>
        <div className="w-full flex justify-between p-4 px-14">
          <div className="flex flex-col justify-center items-center w-[20%] shadow-lg bg-white p-4 gap-6 rounded-lg h-[10rem]">
            <span
              className={
                switchPanel === "details"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchPanel("details")}
            >
              User Details
            </span>
            <span
              className={
                switchPanel === "results"
                  ? "bg-teal-600 rounded-2xl p-2 px-4 font-bold cursor-pointer text-white"
                  : "bg-teal-300/30 rounded-2xl p-2 px-4 text-teal-600 font-bold cursor-pointer hover:bg-teal-600 hover:text-white"
              }
              onClick={() => setSwitchPanel("results")}
            >
              User Results
            </span>
          </div>
          {switchPanel === "details" && (
            <>
              <StudentDetails />
            </>
          )}
          {switchPanel === "results" && (
            <>
              <StudentResult />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OneStudent;

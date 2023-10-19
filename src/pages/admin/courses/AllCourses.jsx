import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const AllCourses = () => {
  const { allCourses, getAllQuestions } = useContext(AppContext);

  const navigate = useNavigate();

  const gotoCourse = async (id) => {
    await getAllQuestions(id);
    navigate(`/admin/courses/one?id=${id}`);
  };

  const addCourse = async () => {
    navigate("/admin/courses/add");
  };

  return (
    <>
      <div className="shadow-lg rounded-md bg-white p-4 w-full flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <input
            class="w-96 px-4 py-1 rounded-lg border-solid border-[0.5px] border-gray-400 text-[#87909E] text-lg focus:outline-none"
            type="text"
            placeholder="Search course..."
          />

          <span
            className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500"
            onClick={addCourse}
          >
            Add New Course
          </span>
        </div>
        <div className="w-full mx-auto mt-5  flex gap-12 p-4 flex-wrap ml-4">
          {/* card */}
          {allCourses ? (
            <>
              {allCourses.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-6 justify-start items-between p-4 shadow-md rounded-md border-2 border-teal-600 w-1/5 cursor-pointer hover:shadow-xl"
                  onClick={() => gotoCourse(item._id)}
                >
                  <span className="font-semibold">{item.name}</span>
                  <div className="flex flex-col justify-start items-between font-light">
                    <span className="text-sm">20 Questions added</span>
                    <span className="text-sm">11 Students</span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <span className="w-full mx-auto">
                No Courses, please add some
              </span>
            </>
          )}
          {/* <div
            className="flex flex-col gap-6 justify-start items-between p-4 shadow-md rounded-md border-2 border-teal-600 w-1/5 cursor-pointer hover:shadow-xl"
            onClick={gotoCourse}
          >
            <span className="font-semibold">
              Introduction to Nursing Information
            </span>
            <div className="flex flex-col justify-start items-between font-light">
              <span className="text-sm">20 Questions added</span>
              <span className="text-sm">11 Students</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AllCourses;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import axios from "axios";
import { error, success } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const AllCourses = () => {
  const {
    loading,
    setLoading,
    allCourses,
    getAllQuestions,
    getAllCourses,
    getResultsByCourse,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const gotoCourse = async (id) => {
    setLoading(true);
    await getAllQuestions(id);
    await getResultsByCourse(id);
    setLoading(false);
    navigate(`/admin/courses/one?id=${id}`);
  };

  const addCourse = async () => {
    navigate("/admin/courses/add");
  };

  const deleteHandler = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `https://cbt-api-a37x.onrender.com/api/courses/delete?id=${id}`,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      if (response.status === 200) {
        success("Deleted Course successfully");
        getAllCourses();
        //  goBack();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      error(err.response.data.error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="shadow-lg rounded-md bg-white p-4 w-full flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          {/* <input
            class="w-96 px-4 py-1 rounded-lg border-solid border-[0.5px] border-gray-400 text-[#87909E] text-lg focus:outline-none"
            type="text"
            placeholder="Search course..."
          /> */}
          <div></div>

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
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {allCourses.map((item, i) => (
                    <>
                      <div className="flex gap-2 items-start">
                        <div
                          key={i}
                          className="flex flex-col gap-6 justify-center items-center p-4 shadow-md rounded-md border-2 border-teal-600 w-[200px] h-[70px] cursor-pointer hover:shadow-xl"
                          onClick={() => gotoCourse(item._id)}
                        >
                          <span className="font-semibold">{item.name}</span>
                          {/* <div className="flex w-full items-center justify-between"> */}
                          {/* <div className="flex flex-col justify-start items-between font-light">
                        <span className="text-sm">20 Questions added</span>
                        <span className="text-sm">11 Students</span>
                      </div> */}
                          {/* </div> */}
                        </div>
                        <span
                          className="font-lg text-red-600 font-semibold hover:text-teal-500 cursor-pointer"
                          onClick={() => deleteHandler(item._id)}
                        >
                          x
                        </span>
                      </div>
                    </>
                  ))}
                </>
              )}
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

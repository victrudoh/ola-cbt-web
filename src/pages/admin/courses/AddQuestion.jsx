import React from "react";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const navigate = useNavigate();

  const goBack = async () => {
    navigate("/admin/courses/one");
  };

  return (
    // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
    <form
      action=""
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* top stuff */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Add Question</span>
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 ml-14"
          onClick={goBack}
        >
          Back
        </span>
      </div>
      {/* Question */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Question <span className="text-red-400">*</span>
        </span>
        <textarea
          type="text"
          name="question"
          id="question"
          required
          placeholder="Please add question here . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* Image */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">Image</span>
        <input
          type="file"
          name="image"
          id="image"
          className="bg-gray-300/40 p-2 w-full rounded-lg"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer A <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_a"
          id="answer_a"
          placeholder="Input option A . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer B <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_b"
          id="answer_b"
          placeholder="Input option B . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer C <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_c"
          id="answer_c"
          placeholder="Input option C . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>
      {/* pair */}
      <div className="flex flex-col align-start justify-center gap-2 my-2">
        <span className="text-gray-400">
          Answer D <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="answer_d"
          id="answer_d"
          placeholder="Input option D . . ."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>

      <button
        className="bg-teal-600 rounded-lg p-2 px-4 my-4 mx-auto w-1/2 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500"
        onClick={goBack}
      >
        Add Question
      </button>
    </form>
    // </div>
  );
};

export default AddQuestion;

import React from "react";

const StudentResult = () => {
  return (
    <div className="w-[70%] shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
      {/* name & image */}
      <div className="flex w-full gap-4 items-center justify-start">
        <span className="text-xl font-sans font-semibold">Results </span>
      </div>

      <div className="w-full mt-5">
        <table className="w-full text-center table-fixed">
          <thead className="text-gray-700 h-12">
            <tr>
              <th className="w-[4rem]">S/N</th>
              <th>Course</th>
              <th>Score</th>
            </tr>
          </thead>
          <div className="my-4"></div>

          <tbody>
            {/* <div className="my-2"></div> */}
            <tr className="h-12 bg-teal-400/20">
              <td>1</td>
              <td>Computer Science</td>
              <td>13 0f 60</td>
            </tr>
            <div className="mb-5"></div>
            <tr className="h-12 bg-teal-400/20">
              <td>1</td>
              <td>Nursing</td>
              <td>40 0f 60</td>
            </tr>
            <div className="mb-5"></div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentResult;

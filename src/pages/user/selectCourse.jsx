const selectCourse = () => {
  return (
    <>
      {/* Content */}
      {/* Rotated rectangle */}
      {/* <div
        className="absolute top-1/4 left-[28%] w-[40%] h-[60%] rounded-[8px] bg-gradient-to-r from-green-600 to-green-800 shadow-xl"
        style={{
          transform: "rotate(-8deg)",
          transformOrigin: "top left",
        }}
      ></div> */}
      {/* content main */}
      <div className="bg-white m-auto w-[40%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
        {/* Title part */}
        <div className="flex flex-col items-center justify-center text-teal-800 w-[50%] border-b-[2.5px] p-2 border-teal-600">
          <h4 className="text-teal-800 font-poppins text-xl font-semibold leading-36 tracking-normal">
            Select Course
          </h4>
          <span className="font-poppins text-sm font-normal leading-5 tracking-normal text-center">
            Please select a course to begin with.
          </span>
        </div>
        {/* form part */}
        <div className="w-[80%] my-6 flex flex-col gap-[20px]">
          {/* pair: password */}
          <div className="flex flex-col items-start justify-center">
            <select
              name="course"
              id="course"
              placeholder="johndoe@example.com"
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
            >
              <option>Please select a course</option>
              <option value="#">Mathematics</option>
              <option value="#">Computer Science</option>
              <option value="#">Biology</option>
              <option value="#">English</option>
            </select>
          </div>
          {/* button */}
          <div className="w-full flex items-center justify-center my-4">
            {/* <button className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg">
              Get Started
            </button> */}
            <a
              href="/user/test"
              className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg hover:text-white no-underline"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default selectCourse;

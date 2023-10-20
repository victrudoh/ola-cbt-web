const RightPanel = () => {
  return (
    <>
      <div className="bg-white w-[70%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start gap-4 z-[1]">
        {/* Top part */}
        <div className="flex items-center justify-between w-full">
          <div className="py-2 px-4 rounded-[13px] border-2 font-bold border-teal-700 text-teal-700 cursor-pointer hover:bg-teal-700 hover:text-white">
            Previous
          </div>
          <div className="font-poppins text-xl font-bold leading-9 tracking-normal text-left text-gray-600">
            Question 10
          </div>
          <a
            href="/user/test-completed"
            className="py-2 px-4 rounded-[13px] border-2 font-bold border-teal-700 bg-teal-700 text-white cursor-pointer hover:bg-white hover:text-green-700 no-underline"
          >
            Skip
          </a>
        </div>
        {/* Image holder */}
        {/* <div className="w-full min-h-[250px] flex items-center justify-center">
          <img src="#" alt="Sample Image" />
        </div> */}
        {/* Question */}
        <div className="w-full bg-teal-100 p-3 rounded-md font-poppins text-sm font-normal leading-6 tracking-normal text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras enim est tortor pharetra
          sed lacinia sit. Id elit amet facilisis ultrices. A mattis amet
          consectetur consectetur. Tempus faucibus diam ipsum orci ac pharetra
          risus ut facilisis. Blandit tellus ut vestibulum nunc vel sed. Aliquet
          mauris tellus arcu quam scelerisque non gravida. Lorem tincidunt est
          metus nibh eget. Non sed eget aliquet consequat et orci et mollis
          consequat. Gravida id rhoncus nec velit sollicitudin odio sit amet.
          Egestas eu dignissim lacus cras pellentesque amet egestas at. Sed
          tincidunt cum netus facilisis congue. Vulputate sit in sociis
          porttitor et ligula lectus diam facilisis. Lacus morbi eget lorem.
        </div>
        {/* Answers */}
        <div className="flex gap-6 w-full items-start justify-start my-8 flex-wrap ml-9">
          {/* answer */}
          <div className="w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-start">
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              A
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia
            </div>
          </div>
          {/* answer */}
          <div className="w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-start ">
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              B
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left hover:text-teal-700">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia
            </div>
          </div>
          {/* answer */}
          <div className="w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-start">
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              C
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia
            </div>
          </div>
          {/* answer */}
          <div className="w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-start ">
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              D
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;

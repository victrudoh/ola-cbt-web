import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Leftpanel = () => {
  const { activeUser, oneTest, setQuestionIndex } = useContext(AppContext);
  console.log("🚀 ~ file: Leftpanel.jsx:6 ~ Leftpanel ~ oneTest:", oneTest);

  let sn = 1;

  return (
    <>
      <div className="bg-white w-[30%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1] gap-3">
        <div className="font-poppins text-xl font-bold leading-10 tracking-normal text-center text-teal-700">
          {oneTest?.courseTitle}
        </div>
        <span className="w-[70%] h-[45px] text-white text-center px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 ">
          {activeUser.firstname} {activeUser.lastname}
        </span>
        {/* pairs */}
        <div className="flex flex-col gap-1 w-[90%] align-start-justify-center my-3">
          {/* pair */}
          {/* <div className="flex w-full justify-between align-center-gap-2">
            <div className="font-poppins text-base font-normal leading-6 tracking-normal text-left text-gray-500">
              Time used
            </div>
            <div className="font-poppins text-base font-semibold leading-6 tracking-normal text-right text-teal-700">
              1:30:17
            </div>
          </div> */}
          {/* pair */}
          {/* <div className="flex w-full justify-between align-center-gap-2">
            <div className="font-poppins text-base font-normal leading-6 tracking-normal text-left text-gray-500">
              Time Remaining
            </div>
            <div className="font-poppins text-base font-semibold leading-6 tracking-normal text-right text-teal-700">
              24:17
            </div>
          </div> */}
          {/* pair */}
          <div className="flex w-full justify-between align-center-gap-2">
            <div className="font-poppins text-base font-normal leading-6 tracking-normal text-left text-gray-500">
              Questions Answered
            </div>
            <div className="font-poppins text-base font-normal leading-6 tracking-normal text-right text-gray-500">
              <span className="font-semibold text-teal-700">
                {oneTest?.attemptedQuestions}
              </span>{" "}
              of {oneTest?.totalQuestions}
            </div>
          </div>
        </div>
        {/* Questions */}
        <div className="flex flex-col gap-2 align-start justify-start my-3 w-[90%]">
          <div className="font-poppins text-base font-semibold leading-6 tracking-normal text-left text-teal-700 ml-4">
            Questions
          </div>
          {/* Question numbers */}
          <div className="flex gap-3 flex-wrap w-[90%] ml-4">
            {oneTest?.questions.map((item, i) => (
              <div
                key={i}
                onClick={() => setQuestionIndex(i)}
                className={
                  item.attempted
                    ? "w-[25px] h-[25px] p-5 rounded-tl-[9px] rounded-tr-[9px] rounded-br-[0px] rounded-bl-[9px] gap-10 bg-teal-700 shadow-inset-10 flex items-center justify-center text-white cursor-pointer hover:bg-green-700 my-2"
                    : "w-[25px] h-[25px] p-5 rounded-tl-[9px] rounded-tr-[9px] rounded-br-[0px] rounded-bl-[9px] gap-10 bg-gray-300 shadow-inset-10 flex items-center justify-center text-gray-800 cursor-pointer hover:bg-green-700 hover:text-white my-2"
                }
              >
                {sn++}
              </div>
            ))}
            {/* <div className="w-[25px] h-[25px] p-5 rounded-tl-[9px] rounded-tr-[9px] rounded-br-[0px] rounded-bl-[9px] gap-10 bg-teal-700 shadow-inset-10 flex items-center justify-center text-white cursor-pointer hover:bg-green-700 my-2">
              1
            </div>
            <div className="w-[25px] h-[25px] p-5 rounded-tl-[9px] rounded-tr-[9px] rounded-br-[0px] rounded-bl-[9px] gap-10 bg-gray-300 shadow-inset-10 flex items-center justify-center text-gray-800 cursor-pointer hover:bg-green-700 hover:text-white my-2">
              2
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftpanel;

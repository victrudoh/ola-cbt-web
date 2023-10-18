import React from "react";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();

  const gotoQuestion = async () => {
    navigate("/admin/questions/edit");
  };

  return (
    <div className="w-[75%] shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
      {/* cards */}
      <div className="w-full mx-auto mt-5  flex gap-12 p-4 flex-wrap ml-4">
        {/* card */}
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex gap-2 justify-start items-between shadow-md rounded-md border-2 border-teal-600 w-[320px] cursor-pointer hover:shadow-2xl"
          onClick={gotoQuestion}
        >
          <span className="text-xl font-semibold">1</span>
          <div className=" w-full bg-white rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
            {/* Image holder */}
            <div className="w-full min-h-[5%] flex items-center justify-center">
              {/* image */}
              <img src="#" alt="Sample Image" />
            </div>
            {/* Question */}
            <div className="w-full h-28 p-2 bg-teal-100 rounded-md font-poppins text-xs text-center text-gray-600 overflow-hidden">
              Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
              pharetra sed lacinia sit. Id elit amet facilisis ultrices. A
              mattis amet consectetur consectetur.
            </div>
            {/* Answers */}
            <div className="flex gap-2 w-full items-start justify-start my-2 flex-wrap ml-2">
              {/* answer */}
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
              <div className="w-[45%] rounded-md p-2 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-2 items-start overflow-hidden h-20">
                <div className="font-poppins text-xs text-left text-teal-700">
                  A
                </div>
                <div className="font-poppins text-xs text-left text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Cras enim est tortor
                  pharetra sed lacinia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

import React from "react";

const Filterbox = () => {
  return (
    <>
      <div className="  mt-4 bg-[#ffffff] min-w-[180px]  items-center cursor-default flex max-w-screen-2xl overflow-x-auto overflow-y-hidden flex-wrap justify-between max-h-[38px] relative border-2 rounded box-border  border-[rgb(229, 229, 229)] mr-1 ">
        <button className="first  items-center  flex-grow flex-shrink relative max-w-screen-2xl overflow-x-auto  overflow-y-hidden pt-[2px] pb-[2px] pl-[8px] pr-[8px]  box-border basis-0   placeholder-gray-400 text-gray-400 ">Lorem ipsum dolor sit amet.</button>

        <button className="second flex p-[8px] box-border mr-2  ">
          <div className=" inline-block fill-current text-gray-400 transition ease-in-out delay-150  hover:text-gray-500  leading-none stroke-current  stroke-1  border-l-2 boder-[rgb(153, 153, 153)] ">
            <svg className="ml-2 h-4 w-4 bg-transparent ">
              <path d="M 4.516 7.548 c 0.436 -0.446 1.043 -0.481 1.576 0 l 3.908 3.747 l 3.908 -3.747 c 0.533 -0.481 1.141 -0.446 1.574 0 c 0.436 0.445 0.408 1.197 0 1.615 c -0.406 0.418 -4.695 4.502 -4.695 4.502 c -0.217 0.223 -0.502 0.335 -0.787 0.335 s -0.57 -0.112 -0.789 -0.335 c 0 0 -4.287 -4.084 -4.695 -4.502 s -0.436 -1.17 0 -1.615 Z" />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default Filterbox;

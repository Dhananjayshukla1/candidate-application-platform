import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCard } from "../Store/Reducers/RoleSlice";

const Exp = ({handler}) => {
  const minExp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [opn, setopn] = useState(false);
  const [minEx, setminEx] = useState("Experience");
 const dispatch= useDispatch()
  return (
    <>
      <div className=" min-h-[36px] border-2 rounded-lg  min-w-[180px] box-border max-h-[36px] relative ">
        <span
          contenteditable="true"
          onClick={() => {
            setopn(!opn);
            console.log(opn);
          }}
          className="first  overflow-hidden  mr-1  flex  shrink w-full   justify-center items-center  max-w-screen-2xl overflow-x-auto  overflow-y-hidden pt-[10px] pb-[2px] pl-[8px] pr-[8px]  box-border  text-gray-400  placeholder:(hello) "
        >
          {minEx}
        </span>
        <div
          onClick={(e) => {
            let clickedValue;
            if (e.target.tagName === "INPUT") {
              clickedValue = e.target.value;
            } else {
              clickedValue = e.target.textContent || e.target.innerText;
            }
            console.log(clickedValue);
            setopn(!opn);

            setminEx(clickedValue);
            handler(clickedValue)

          }}
          className={` absolute bg-[#ffffff]  border-2 rounded-md w-[100%] ${opn ? "max-h-80" : "max-h-0"} ${
            opn ? "z-10" : "-z-10"
          } ${
            opn ? "overflow-auto" : " overflow-hidden "
          }  top[60%] `}
        >
          {minExp.map((minExp,i) => (
            <div key={i}
              className="pt-2 pb-1  font-semibold text-zinc-600 w-[100%] flex justify-center items-center border-b-2 
     "
            >
              <h3>{minExp}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exp;

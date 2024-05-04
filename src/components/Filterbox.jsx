import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCard } from "../Store/Reducers/RoleSlice";

const Filterbox = ({handler}) => {
  const [opn, setopn] = useState(false);
  const products = useSelector((state) => state.cardS.products);
  let distinct_role =
    products && products.reduce((acc, cv) => [...acc, cv.jobRole], []);
  distinct_role = [...new Set(distinct_role)];
  const dispatch= useDispatch()
  const [role, setrole] = useState("Roles");
  return (
    <>
      <div className=" min-w-[180px] relative ">
        <span
          contenteditable="true"
          onClick={() => {
            setopn(!opn);
            console.log(opn);
          }}
          className="first border-2 rounded-lg min-h-[36px] border-[rgb(229, 229, 229)] mr-1 mt-4 flex  shrink w-full   justify-center items-center  max-w-screen-2xl overflow-x-auto  overflow-y-hidden pt-[2px] pb-[2px] pl-[8px] pr-[8px]  box-border   text-gray-400 "
        >
          {role}
        </span>
        <div
          onClick={(e) => {
            let clickedValue;
            if (e.target.tagName === "INPUT") {
              clickedValue = e.target.value;
            } else {
              clickedValue = e.target.textContent || e.target.innerText;
            }
            
            setrole(clickedValue);
            setopn(!opn);
            console.log(clickedValue);
            handler(clickedValue)
          }}
          className={` absolute border-2 rounded-md bg-[#ffffff]  w-[100%] ${opn ? "max-h-80" : "max-h-0"}  ${
            opn ? "z-10" : "-z-10"
          } ${
            opn ? "overflow-auto" : " overflow-hidden "
          }  top[60%] `}
        >
          {distinct_role.map((role,i) => (
            <div key={i}
              className="pt-2 pb-1 font-semibold text-zinc-600 w-[100%] flex justify-center items-center border-b-2 
     "
            >
              <h3>{role}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filterbox;

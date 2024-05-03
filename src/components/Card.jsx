import React, { useEffect, useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import {GetCard} from '../Store/Actions/CardAction'


const Card = () => {
     
  
  const dispatch=useDispatch();
  useSelector(() =>{})
  useEffect(()=>{

    dispatch(GetCard());

  },[])


  const [readMore, setreadMore] = useState(true);
  
  return (
    <>
      <div class="card  pt-[50px] p-[5px] min-w-[360px] flex relative items-center  flex-col justify-between overflow-hidden min-h-[550px]">
        <div className="  px-3 w-full h-full ">
          <div className="  flex">
            <img
              className="w-[35px] ml-2 -mr-7 h-[45px]"
              src="./assets/company.jpg"
              alt=""
            />

            <div className="Uerdetail  -pt-3 flex flex-col items-start pl-10 h-[65px] w-[256px] ">
              <div className="companyname text-[#8B8B8B]   font-normal">
                Amazon
              </div>
              <div className="jobtitle text-[16px] text-[#383434] font-normal">
                Senior Software Engineer
              </div>

              <p
                className="location text-[
          #000000] text-[11px] font-medium"
              >
                India
              </p>
            </div>
          </div>
          <div className="flex h-[62%] -mb-6 flex-col items-start">
            <p className="salary mx-[8px] my-4 text-[15px] font-normal text-[#7B8491]">
              Estimated Salary: ₹20 - 25 LPA <span> ✅</span>
              <br />
            </p>

            <p className="font-medium	ml-2 font-sans text-[#5b5555] text-[16.5px] ">
              About Company:
            </p>

            <strong className="text-[#000000] ml-2  font-bold  font-sans text-[14.5px] ">
              About us
            </strong>

            <div
              className={`decsription  text-[#757575]  `}
            >
            <div className="secDes">
            kj
              </div>
            </div>
            </div>
            <button
              onClick={() => setreadMore(!readMore)}
              className="text-[#4943DA] mx-auto 
               font-normal h-10 w-18  mb-2 text-[14px]"
            >
              {readMore ? "Show More" : "Less"}
            </button>
          <div className="flex flex-col items-start  pl-4">
            <p className="text-[#8B8B8B] font-semibold font-sans  text-[15px]">
              Minimum Experience
            </p>
            <p
              className="font-normal text-[15px] mb-1 text-[
            #000000] "
            >
              3 years
            </p>
          </div>
          <button class="border not-italic rounded-lg  text-base font-medium w-[323px] h-[45px] text-[#000000] bg-[#55EFC4]">
            ⚡Easy Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

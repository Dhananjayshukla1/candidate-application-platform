import React from "react";
import Fliterbox from "./Filterbox";
import Exp from "../components/Exp";
import Remote from './Remote'
import Location from "./Location";
import Search from './Search'
import MinbasePay from './MinbasePay';
const Filterbar = ({handler}) => {
  return (
    <div className="pt-7 gap-2 flex pr-[20px] pb-[88px] pl-[20px] flex-warp items-end  ">
      <Fliterbox handler={handler}></Fliterbox>
      <Location></Location>
      <Exp handler={handler}></Exp>
       <Remote></Remote>
       <Search></Search>
       <MinbasePay handler={handler}></MinbasePay>
      </div>
  );
};

export default Filterbar;

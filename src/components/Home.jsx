import React from 'react'
import Filterbar from './Filterbar'
import Card from './Card'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetCard } from "../Store/Actions/CardAction";

const Home = () => {





  const products = useSelector((state) => state.cardS.products);
  const dispatch = useDispatch();
 
 const [data,setdata] =useState([products]);

  useEffect(() => {
    dispatch(GetCard());
  }, []);

  
  useEffect(() => {
    setdata(products);
  }, [products]);

 const handler=(s)=>{

    console.log(s)
  
 }


  return (

    <div className=' max-w-[85%]  h-screen mx-auto '>
      <Filterbar handler={handler} ></Filterbar>
      
      <div className='w-full min-h-screen  flex flex-wrap justify-around gap-y-[36px] '>
      <Card data={data} ></Card>
      </div>
      
    </div>
  )
}

export default Home

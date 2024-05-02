import React from 'react'
import Filterbar from './Filterbar'
import Card from './Card'
const Home = () => {
  return (
    <div className=' max-w-[85%]  h-screen mx-auto '>
      <Filterbar></Filterbar>
      <div className='w-full min-h-screen  flex flex-wrap justify-around gap-y-[36px] '>
      <Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card><Card></Card>
      </div>
      
    </div>
  )
}

export default Home

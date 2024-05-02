import React from 'react'
import Filterbar from './Filterbar'
import Card from './Card'
const Home = () => {
  return (
    <div className=' max-w-[1200px] h-full mx-auto bg-zinc-50'>
      <Filterbar></Filterbar>

      <Card></Card>
    </div>
  )
}

export default Home

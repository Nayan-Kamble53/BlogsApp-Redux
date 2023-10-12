import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className=' bg-slate-700 text-slate-100 pb-[8%] home'>
      <Header/>

      <div className='w-full flex justify-center '>
        <Blogs/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home

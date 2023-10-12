import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  //location mei mtlb url ko split krege on the basis of "/" and jo last mei hoga vo hojayege tag ki value
 
  return (
    <div className='tagPage flex flex-col items-center bg-slate-700 text-slate-100 h-max w-full pb-[5%]'>
      <Header/>

      <div className='w-[650px] tagPageButton pt-[8%] flex justify-start items-start -mb-[5%] gap-x-3'>
        <button className='border-2 border-gray-300 text-lg py-1 px-4 rounded-md'
            onClick={() => navigate(-1)} //back pe click kiya toh -1 hoke piche aana
        >
            Back
        </button>
        
        <h2 className='font-bold text-xl my-auto'>
            Blogs Tagged <span className='underline text-blue-500'>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default TagPage

import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  //location mei mtlb url ko split krege on the basis of "/" and jo last mei hoga vo hojayege tag ki value
 
  return (
    <div className='flex flex-col justify-center items-center bg-slate-700 text-slate-100 h-max w-full pb-[10%] categoryPage'>
      <Header/>

      <div className='w-[650px] pt-[8%] flex items-start justify-start -mb-[5%] gap-x-3 category'>
        <button className='back border-2 border-gray-300 text-lg py-1 px-4 rounded-md'
            onClick={() => navigate(-1)} //back pe click kiya toh -1 hoke piche aana
        >
            Back
        </button>
        <h2 className='font-bold text-xl my-auto'>
            Blogs On <span className='underline'>{category}</span>
        </h2>
      </div>

      <Blogs/>
      <Footer/>
    </div>
  )
}

export default CategoryPage

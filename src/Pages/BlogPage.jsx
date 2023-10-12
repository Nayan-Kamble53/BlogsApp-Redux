import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { AppContext } from '../Context/AppContext';
import Header from '../Components/Header';
import Spinner from '../Components/Spinner';
import BlogDetails from '../Components/BlogDetails';
import Image from "../no-data-found.png";

export default function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {loading, setLoading} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1); 

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}/get-blog?blogId=${blogId}`; 

    try {
        const res = await fetch(url);
        const data = await res.json();
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
    }
    catch(error) {
        console.log("Error in blogId call");
        setBlog(null);
        setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(blogId) {
        fetchRelatedBlogs();
    }
  }, [location.pathname]); //hr baar jb bhi path change hoga mtlb blogId change hogi fetchRelatedBlogs() ko call krna hai

  return (
    <div className='bg-slate-600 text-slate-100 flex flex-col justify-start items-center blogPage'>
      <Header/> 

      <div className='w-[650px] mt-[7%] mb-4 blogPageButton'>
        <button className='border-2 border-gray-300 text-lg py-1 px-4 rounded-md'
            onClick={() => navigate(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ? 
        (<div>
            <Spinner/>
        </div>)
        :
        blog ?
        (<div>
            <BlogDetails post={blog} />
            <h2 className='font-bold text-3xl my-10'>Related Blogs</h2>
            {
                relatedBlogs.map((post) => (
                    <div key={post.id}>
                        <BlogDetails post={post} />
                    </div>
                ))
            }
        </div>) :
        (<div className='h-screen image w-[40vw] mt-5'>
            <img src={Image}/>
        </div>)
      }
    </div>
  )
}

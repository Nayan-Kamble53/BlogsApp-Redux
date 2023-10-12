import React, { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation(); //location mtlb current location

  useEffect(() => {
    const page = searchParams.get("page") ?? 1; //searchParams object mei search krege and page mei set krege agar "page" nam ki key hi ni hai toh by default 1 set hoga (?? 1)

    if(location.pathname.includes("tags")) {
      //iska mtlb tag wala page show krna hai
      // "/" se split kiya and last wali value le li (-1) se and assign kri tag ko
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " "); 
      fetchBlogPosts(Number(page), tag);
    }

    else if(location.pathname.includes("categories")) {
      //iska mtlb categories wala page show krna hai
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }

    else {
      //na toh tag ki call gai aur na hi category ki toh ye normal call gai hai
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]); //jb bhi pathname change hoga ye render hoga

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  )
}

import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";
import BlogDetails from "./BlogDetails";
import Image from "../no-data-found.png";

const Blogs = () => {
    // step3: this is for consuming data
    const { posts, loading } = useContext(AppContext);
    console.log(posts);

    return (
        <div className="bg-slate-700 h-screen max-w-[650px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mb-[30%] blogs">
            {loading ? (<Spinner />)
            : posts.length === 0 ? (
                <div className="flex justify-center items-center">
                    <img src={Image}/>
                </div>  
            ) : (
                posts.map((post) => (
                    <BlogDetails key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default Blogs;

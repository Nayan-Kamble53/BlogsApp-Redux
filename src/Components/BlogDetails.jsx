import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlogDetails({post}) {
  return (
    <div className='mb-5 max-w-[650px] blogDetails'>
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-xl hover:underline'>{post.title}</span>
      </NavLink>

      <p>
        By <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>

      <p className='mb-3'>Posted on {post.date}</p>
      <p>{post.content}</p>

      <div className='tag flex mt-2 text-sm font-bold gap-x-3 text-blue-400 underline'>
        {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                <span>{`#${tag}`}</span>
            </NavLink>
        ))}
      </div>
    </div>
  )
}

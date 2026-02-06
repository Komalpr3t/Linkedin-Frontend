import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaRegThumbsUp } from "react-icons/fa6";

const Feed = () => {

  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("https://linkedin-backend-five.vercel.app/api/get-posts");
      setPosts(response.data.posts);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <h1 className='text-4xl text-gray-600 my-12'>Feed</h1>

      <ul className="mt-10 flex flex-col gap-8">
        {posts.map((post) => (
          <li
            key={post._id}
            className="flex flex-col gap-4 w-96 border-2 border-black p-4 rounded-lg"
          >
            <p className="text-xs text-gray-600">
              Posted by: {post.author?.username}
            </p>

            <p className="text-center font-semibold text-lg">
              {post.content}
            </p>

            <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <span>Likes: {post.likes.length}</span>
              <span>Comments: {post.numberOfComments}</span>
            </div>
             <FaRegThumbsUp className="text-2xl"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Feed


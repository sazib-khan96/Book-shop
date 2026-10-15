import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router';

const Post = ({ blog }) => {
  const { id } = blog;
 

  return (
    <div className="w-6xl mx-auto p-5 border">
      <h1 className="text-2xl">{blog.title}</h1>
      <NavLink to={`/blog/${id}`}>
        <button>View Details</button>
      </NavLink>
    </div>
  );
};

export default Post;

"use client";

import React from "react";
import BlogItem from "./BlogItem";

export default function PostList({ BlogList }) {
  console.log("PostList Rendered");
  return (
    <div className="flex flex-col overflow-hidden gap-3">
      {BlogList.map((item, key) => {
        return <BlogItem item={item} key={key} />;
      })}
    </div>
  );
}

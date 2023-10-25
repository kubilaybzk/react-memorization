"use client";
import React, { memo } from "react";

 function BlogItem({ item }) {
  console.log("Post Rendered", JSON.stringify(item));
  return (
    <div className="flex flex-col w-full border justify-start items-baseline p-2 border-black rounded-md">
      <h2 className="font-bold text-md">{item.title}</h2>
      <span className="font-medium text-sm ">{item.content}</span>
    </div>
  );
}

export default memo(BlogItem);

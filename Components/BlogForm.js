"use client";

import { useRef, useState } from "react";

const BlogForm = ({ setBlogList, BlogList }) => {
  //Verileri tutmak için gerekli olan state değerleri.
  console.log("Form Rendered");
  let TitleRef = useRef();
  let ContentRef = useRef();

  //Post formu yollamasını sağlayan function.
  function onSavePostClicked() {
    setBlogList([
      ...BlogList,
      {
        title: TitleRef.current.value,
        content: ContentRef.current.value,
      },
    ]);
  }

  return (
    <form>
      <div className="flex flex-col  mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="postTitle"
        >
          Post Title:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="postTitle"
          name="postTitle"
          ref={TitleRef}
        />
      </div>

      <div className="flex flex-col  mb-3">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="postContent"
        >
          Content:
        </label>
        <textarea
          id="postContent"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="postContent"
          ref={ContentRef}
        />
      </div>

      <button
        type="button"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => onSavePostClicked()}
      >
        Save Post
      </button>
    </form>
  );
};
export default BlogForm;

"use client";
import PostList from "@/Components/BlogList";
import BlogForm from "@/Components/BlogForm";
import Image from "next/image";
import { useState } from "react";
import Header from "@/Components/Header";

export default function Home() {
  const [BlogList, setBlogList] = useState([]);
  console.log("HomePage Rendered");
  return (
    <>
      <Header />{" "}
      <section className="flex justify-center items-center md:min-h-screen">
        <div className="max-w-screen-xl m-0 max-h-screen h-screen md:h-fit bg-white shadow-lg sm:rounded-lg flex flex-wrap justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 w-full p-6 sm:p-12">
            <div className="flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <BlogForm BlogList={BlogList} setBlogList={setBlogList} />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center lg:w-1/2 xl:w-5/12  lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat LoginBG">
              <PostList BlogList={BlogList} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

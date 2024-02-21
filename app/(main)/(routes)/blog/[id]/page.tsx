"use client"

import React, { useEffect, useState } from "react";
import { blogPosts } from "@/lib/blogs";
import { redirect } from "next/navigation";
import Header from "@/components/ui/header";
import Image from "next/image";

const page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [blog, setBlog] = useState({
    id: "",
    title: "",
    body: "",
    imageUrl: "",
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const blog = blogPosts.find((blog) => blog.id === params.id);
    if (!blog) {
      redirect("/404");
    }
    setBlog(blog);
  }, [params.id]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <main>
        <Header />

        <div>
          <h1 className="text-4xl max-w-6xl mx-auto font-bold text-left mt-24">
            {blog.title}
          </h1>
          <div className="min-h-screen mt-4 flex max-w-6xl mx-auto  ">
            <div className="flex flex-wrap">
              <div className="max-w-6xl mx-auto">
                <div className="relative h-96 w-full object-bottom object-fill  aspect-square">
                  <Image fill alt="Image" src={blog.imageUrl} />
                </div>
                <p className="text-lg mt-4">{blog.body}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

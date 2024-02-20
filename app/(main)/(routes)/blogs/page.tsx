import Header from "@/components/ui/header";
import React from "react";
import BlogCard from "./_components/BlogCard";
import { blogPosts } from "@/lib/blogs";

function page() {


  


  return (
    <main>
      <Header />
      <h1 className="text-4xl max-w-6xl mx-auto font-bold text-left mt-24">
        Our latest blogs
      </h1>
      <div className="min-h-screen mt-4 flex max-w-6xl mx-auto  ">
        <div className="flex flex-wrap">
          {blogPosts.map((post, index) => {
            return (
              <BlogCard
                id={post.id}
                key={index}
                index={index}
                title={post.title}
                body={post.body}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default page;

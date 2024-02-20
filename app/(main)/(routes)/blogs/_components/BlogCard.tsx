"use client";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface BlogCardProps {
  title: string;
  body: string;
  date: string;
  imageUrl: string;
  id: string;
  index: number;
}

const BlogCard = ({
  title,
  body,
  date,
  imageUrl,
  id,
  index,
}: BlogCardProps) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Link
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration={1000}
      href={`/blog/${id}`}
    >
      <div className="min-w-[300px] max-h-96 max-w-[300px]  flex justify-center flex-col p-2 border-indigo-950 ">
        <div className="relative aspect-square">
          <Image fill alt="Image" src={imageUrl} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{body.split(" ").slice(0, 10).join(" ")}...</p>
        </div>
        <div className="flex justify-end items-center p-2">
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

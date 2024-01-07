import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { formatPublishedDate } from "@/utils/lib";
const BlogCard = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='shadow w-full bg-[#00000008] px-3 py-4 rounded flex items-center justify-between border border-neutral-200 hover:shadow'
    >
      <div className='font-medium'>
        <h1 className='text-bold sm:text-[16px] text-clip capitalize'>
          {post.title}
        </h1>
        <p className='text-neutral-600 mt-1'>
          {formatPublishedDate(post.publishedAt)}
        </p>
      </div>
      <div className='transition-transform hover:rotate-[-18deg]'>
        <MdArrowOutward />
      </div>
    </Link>
  );
};

export default BlogCard;

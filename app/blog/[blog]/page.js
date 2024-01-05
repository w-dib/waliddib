/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/BackButton";
import BlogCard from "@/components/BlogCard";
import { RichTextComponents } from "@/components/RichTextComponents";
import { getBlog, getRecentBlogs } from "@/sanity/sanity-utils";
import { formatPublishedDate } from "@/utils/lib";
import { PortableText } from "@portabletext/react";

export default async function BlogPage({ params }) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  const recentBlogs = await getRecentBlogs();

  return (
    <article className='mx-auto p-4 bg-white flex-col items-center w-screen md:max-w-4xl h-full md:px-12'>
      <BackButton />

      <h1 className='my-2text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl'>
        {blog.title}
      </h1>
      <p className='text-gray-500 text-sm'>
        {formatPublishedDate(blog.publishedAt)}
      </p>

      <img
        className='w-full h-96 object-contain rounded-md my-2'
        src={blog.mainImage}
        alt='Blog Image'
      />

      <div className='px-2 prose prose-lg my-2text-justify mx-auto'>
        <PortableText value={blog.body} components={RichTextComponents} />
      </div>
      {/* recent projects */}
      <div className='my-12 space-y-6'>
        <h1 className='capitalize text-2xl'>recent {"blog's"}</h1>
        <div className='flex flex-col gap-4 '>
          {recentBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <BackButton />
    </article>
  );
}

export async function generateMetadata({ params }) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  return {
    title: `Blog - ${blog.title}`,
    description: blog.description,
    image: blog.mainImage,
  };
}

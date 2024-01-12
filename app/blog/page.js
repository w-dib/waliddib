/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/BackButton";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/sanity/sanity-utils";

export default async function BlogList() {
  const client = await getAllBlogs();

  return (
    <div className='xs:p-2 max-w-4xl sm:mx-auto h-full mx-2'>
      <BackButton />
      <div className='flex flex-col gap-4 items-center sm:mt-12 mb-4'>
        {client.map((post, i) => (
          <BlogCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Blog - Walid Dib",
  description: "A list of all my blog posts.",
  image: "/bio.png",
};

/* eslint-disable @next/next/no-img-element */
import BackButton from "@/components/BackButton";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/sanity/sanity-utils";

export default async function BlogList() {
  const client = await getAllBlogs();

  return (
    <div className='xs:p-2 max-w-4xl mx-auto h-full'>
      <BackButton />
      <div className='flex flex-col gap-4 items-center mt-12 mb-4'>
        {client.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

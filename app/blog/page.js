/* eslint-disable @next/next/no-img-element */
import { getAllBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function BlogList() {
  const client = await getAllBlogs();
  function formatPublishedDate(publishedAt) {
    const date = new Date(publishedAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <div className="xs:p-2 max-w-4xl mx-auto h-full">
      <Link href="/">
        <p className="text-blue-500 hover:underline my-4">Back to homepage</p>
      </Link>
      <div className="flex flex-col gap-4 items-center mt-12 mb-4">
        {client.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post._id}
            className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white border border-gray-200 rounded-lg shadow transition-transform hover:scale-105 hover:shadow-xl hover:border-gray-300"
          >
            <div className="mb-2">
              <img
                src={post.mainImage}
                className="rounded-t-lg w-full h-56 object-cover"
                alt="Blog Cover"
              />
            </div>

            <h3 className="px-1 ml-1 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm ml-1 mb-2 px-1">
              {formatPublishedDate(post.publishedAt)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

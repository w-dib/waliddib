/* eslint-disable @next/next/no-img-element */
import { RichTextComponents } from "@/components/RichTextComponents";
import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function BlogPage({ params }) {
  function formatPublishedDate(publishedAt) {
    const date = new Date(publishedAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <article className="mx-auto flex-col items-center max-w-4xl h-full px-12">
      <Link href="/">
        <p className="text-blue-500 hover:underline my-4">Back to homepage</p>
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        {blog.title}
      </h1>
      <p className="text-gray-500 text-sm">
        {formatPublishedDate(blog.publishedAt)}
      </p>
      <img
        className="w-full h-96 object-cover mt-4 rounded-md"
        src={blog.mainImage}
        alt="Blog Image"
      />

      <div className="bg-slate-50 border rounded-md px-6 py-6 prose prose-lg mt-4 text-justify mx-auto">
        <PortableText value={blog.body} components={RichTextComponents} />
      </div>
      <Link href="/">
        <p className="text-blue-500 hover:underline my-4">Back to homepage</p>
      </Link>
    </article>
  );
}

/* eslint-disable @next/next/no-img-element */
import { RichTextComponents } from "@/components/RichTextComponents";
import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";

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
    <article className="mx-auto flex-col items-center w-screen md:max-w-4xl h-full px-4 md:px-12">
      <Link href="/">
        <p className="text-blue-500 hover:underline my-4">Back to homepage</p>
      </Link>

      <h1 className="my-2text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        {blog.title}
      </h1>
      <p className="text-gray-500 text-sm">
        {formatPublishedDate(blog.publishedAt)}
      </p>

      <img
        className="w-full h-96 object-contain rounded-md my-2"
        src={blog.mainImage}
        alt="Blog Image"
      />

      <div className="px-2 prose prose-lg my-2text-justify mx-auto">
        <PortableText value={blog.body} components={RichTextComponents} />
      </div>
      <Link href="/">
        <p className="text-blue-500 hover:underline my-4">Back to homepage</p>
      </Link>
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

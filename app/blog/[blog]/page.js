import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function BlogPage({ params }) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <div className="mx-auto flex-col bg-slate-50 items-center w-full h-full px-12">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
        {blog.title}
      </h1>
      <div className="prose prose-lg max-w-xl mt-4 text-justify mx-auto">
        <PortableText value={blog.body} />
      </div>
    </div>
  );
}

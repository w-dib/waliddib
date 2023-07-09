/* eslint-disable @next/next/no-img-element */
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Link from "next/link";

const imageBuilder = urlBuilder({
  projectId: "tbcelk7e",
  dataset: "production",
});

export const RichTextComponents = {
  types: {
    image: ({ value, isInline }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <img
          src={imageBuilder.image(value).url()}
          alt={value.alt || " "}
          loading="lazy"
          className={`my-8 mx-auto ${
            isInline ? "max-w-xs" : "max-w-full"
          } rounded-lg shadow-lg`}
          style={{ aspectRatio: width / height }}
        />
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4 text-left">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-4 text-left">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold my-4 text-left">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-8 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-8 my-4">{children}</ol>
    ),
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          {children}
        </Link>
      );
    },
  },
};

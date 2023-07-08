/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { getSanityClient } from "../sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const client = await getSanityClient();
  function formatPublishedDate(publishedAt) {
    const date = new Date(publishedAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <main className="flex flex-col bg-slate-50 items-center w-full h-full px-12">
      {/* About Me */}
      <div className="mt-12 w-40 h-40">
        <Image src="/bio.png" alt="bio" width={200} height={200} />
      </div>
      <div className=" text-justify max-w-lg mt-12">
        <h1 className="font-bold text-2xl mb-4">About</h1>
        <p>
          I founded and{" "}
          <span>
            <a
              href="https://gulftimesarabia.com/xa-group-acquires-addenda-mirsaas-to-extend-its-digital-offerings-in-the-region/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              sold
            </a>{" "}
          </span>
          a blockchain B2B InsurTech called Addenda, and was named Forbes 30
          under 30 MENA in 2021. I later{" "}
          <span>
            <a
              href="https://www.wamda.com/2021/08/hala-raises-5-million"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              raised
            </a>
          </span>{" "}
          5M USD for another B2C InsurTech called Hala Insurance, which sold 3M
          USD in policies, but ultimately returned investor funds and shut down.
          Currently working on my next venture. I spend my free time learning to
          code for fun using Next.js and TailwindCSS.
        </p>
      </div>

      {/* Blog cards */}
      <div className="flex flex-col mt-12 gap-4">
        <h1 className="font-bold text-2xl">Sometimes I write stuff</h1>
        <div className="flex md:flex-nowrap flex-wrap gap-4 max-w-lg sm:justify-start">
          {client.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post._id}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 bg-white border border-gray-200 p-4 rounded-lg shadow transition-transform hover:scale-105 hover:shadow-xl hover:border-gray-300"
            >
              <div className="mb-2">
                <img
                  src={post.mainImage}
                  className="rounded-t-lg w-full h-56 object-cover"
                  alt="Blog Cover"
                />
              </div>

              <h3 className="ml-2 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm ml-2">
                {formatPublishedDate(post.publishedAt)}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="text-blue-500 hover:underline hover:cursor-pointer text-center"
        >
          More posts
        </Link>
      </div>

      {/* Contact Me */}
      <div className="flex my-12 justify-around w-64">
        <a
          href="https://www.linkedin.com/in/wdanieldib/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="h-12 w-12 hover:cursor-pointer hover:text-gray-400" />
        </a>
        <a href="https://github.com/w-dib" target="_blank" rel="noreferrer">
          <AiFillGithub className="h-12 w-12 hover:cursor-pointer hover:text-gray-400" />
        </a>
        <a
          href="mailto:wdanieldib@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hover:cursor-pointer hover:text-gray-400"
        >
          <AiOutlineMail className="h-12 w-12" />
        </a>
      </div>
    </main>
  );
}

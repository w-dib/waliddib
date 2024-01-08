/* eslint-disable @next/next/no-img-element */
// import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { getRecentBlogs } from "../sanity/sanity-utils";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import BlogCard from "@/components/BlogCard";
import { socialMediaLink } from "@/utils/lib";
// import CompanyCard from "@/components/CompanyCard";
import Image from "next/image";

export default async function Home() {
  const client = await getRecentBlogs(false);

  return (
    <main className='flex flex-col items-center w-full h-full px-12'>
      {/* navbar */}
      {/* <div className='flex gap-4 font-bold mt-8 max-w-2xl w-full text-justify'>
        <Link href={"/"}>home</Link>
        <Link href={"/blog"}>blog</Link>
      </div> */}
      {/* About Me */}
      <Image
        src='/main.jpg'
        alt='main'
        width={250}
        height={250}
        className='mt-12 rounded-full'
      />
      <div className='text-justify max-w-2xl mt-12'>
        <h1 className='font-bold text-2xl mb-4'>Hey, {"I'm"} Walid 👋</h1>
        <p>
          I&apos;m the founder of{" "}
          <Link
            href='https://www.callmi.co'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500 hover:underline'
          >
            Callmi
          </Link>
          , a platform that lets you book MENA&apos;s most in-demand startup
          experts over a 1:1 video call. I previously founded two other
          startups: a blockchain B2B InsurTech called{" "}
          <Link
            href='https://gulftimesarabia.com/xa-group-acquires-addenda-mirsaas-to-extend-its-digital-offerings-in-the-region/'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500 hover:underline'
          >
            Addenda
          </Link>
          , and a B2C InsurTech called{" "}
          <Link
            href='https://www.wamda.com/2021/08/hala-raises-5-million'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500 hover:underline'
          >
            Hala Insurance
          </Link>
          . I spend my free time learning to how code video games for fun using{" "}
          <Link
            href='https://godotengine.org'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500 hover:underline'
          >
            Godot
          </Link>
          , an open-source engine.
        </p>
      </div>

      {/* social media link */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-2 max-w-2xl w-full my-8'>
        {socialMediaLink.map((social, i) => (
          <Link
            key={i}
            target='_blank'
            href={social.link}
            className='flex items-center justify-between cursor-pointer bg-[#00000008] w-full rounded px-3 py-4 border border-neutral-200'
          >
            <div className='flex items-center space-x-3'>
              <div className='h-16 w-16'>
                <img
                  className='w-full h-full'
                  src={social.name === "callmi" ? "/callmi.svg" : "/bio.png"}
                  alt='links'
                />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>{social.name}</h3>
                <p className='text-sm text-gray-500'>@{social.username}</p>
              </div>
            </div>
            <div className='transition-transform hover:rotate-[-18deg]'>
              <MdArrowOutward />
            </div>
          </Link>
        ))}
      </div>

      {/* Blog cards */}

      <div className='flex flex-col space-y-4 w-full max-w-2xl mb-4'>
        <h1 className='font-bold text-2xl'>Sometimes I write stuff</h1>
        {client.map((post) => (
          <BlogCard post={post} key={post._id} />
        ))}
        <Link
          href='/blog'
          className='text-blue-500 hover:underline hover:cursor-pointer text-center'
        >
          More posts
        </Link>
      </div>

      {/* company list */}
      {/* <div className="flex flex-col w-full max-w-2xl text-start my-8 space-y-5">
        <p>Companies {"I've"} worked with</p>
        <div className="flex flex-wrap items-center gap-2">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div> */}

      {/* Contact Me */}
      {/* <div className="flex my-12 justify-around w-64">
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
      </div> */}
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: "Home - Walid Dib",
    description:
      "I founded and sold a blockchain B2B InsurTech called Addenda, and was named Forbes 30 under 30 MENA in 2021. I later raised 5M USD for another B2C InsurTech called Hala Insurance, which sold 3M USD in policies, but ultimately returned investor funds and shut down. Currently working on my next venture. I spend my free time learning to code for fun using Next.js and TailwindCSS.",
    image: "/bio.png",
  };
}

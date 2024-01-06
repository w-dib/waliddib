/* eslint-disable @next/next/no-img-element */
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { getRecentBlogs } from "../sanity/sanity-utils";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import BlogCard from "@/components/BlogCard";
import { socialMediaLink } from "@/utils/lib";
import CompanyCard from "@/components/CompanyCard";

export default async function Home() {
  const client = await getRecentBlogs();

  return (
    <main className='flex flex-col items-center w-full h-full px-12'>
      {/* navbar */}
      <div className='flex gap-4 font-bold mt-8 max-w-lg w-full text-justify'>
        <Link href={"/"}>home</Link>
        <Link href={"/blog"}>blog</Link>
      </div>
      {/* About Me */}
      <div className='mt-12 w-40 h-40'>
        <img src='/bio.png' alt='bio' width={200} height={200} />
      </div>
      <div className='text-justify max-w-lg mt-12'>
        <h1 className='font-bold text-2xl mb-4'>hey, {"I'm"} Walid 👋</h1>
        <p>
          I founded and{" "}
          <span>
            <a
              href='https://gulftimesarabia.com/xa-group-acquires-addenda-mirsaas-to-extend-its-digital-offerings-in-the-region/'
              target='_blank'
              rel='noreferrer'
              className='text-blue-500 hover:underline'
            >
              sold
            </a>{" "}
          </span>
          a blockchain B2B InsurTech called Addenda, and was named Forbes 30
          under 30 MENA in 2021. I later{" "}
          <span>
            <a
              href='https://www.wamda.com/2021/08/hala-raises-5-million'
              target='_blank'
              rel='noreferrer'
              className='text-blue-500 hover:underline'
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

      {/* social media link */}
      <div className='flex items-center justify-between gap-2 max-w-lg w-full my-8'>
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
                  alt='instagram'
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

      <div className='flex flex-col space-y-4 w-full max-w-lg'>
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
      <div className='flex flex-col w-full max-w-lg text-start my-8 space-y-5'>
        <p>Companies {"I've"} worked with</p>
        <div className='flex items-center space-x-4 '>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>

      {/* Contact Me */}
      <div className='flex my-12 justify-around w-64'>
        <a
          href='https://www.linkedin.com/in/wdanieldib/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin className='h-12 w-12 hover:cursor-pointer hover:text-gray-400' />
        </a>
        <a href='https://github.com/w-dib' target='_blank' rel='noreferrer'>
          <AiFillGithub className='h-12 w-12 hover:cursor-pointer hover:text-gray-400' />
        </a>
        <a
          href='mailto:wdanieldib@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='hover:cursor-pointer hover:text-gray-400'
        >
          <AiOutlineMail className='h-12 w-12' />
        </a>
      </div>
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

import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { getSanityClient } from "../sanity/sanity-utils";

export default async function Home() {
  const client = await getSanityClient();
  return (
    <main className="flex flex-col bg-slate-50 items-center w-full h-screen px-12">
      <div className="mt-20 md:mt-32 w-40 h-40">
        <Image src="/bio.png" alt="bio" width={200} height={200} />
      </div>
      <div className=" text-justify max-w-lg mt-12">
        <h1 className="font-bold text-2xl mb-2">About</h1>
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
          Currently learning to code as a hobbyist using Firebase, Next.js, and
          TailwindCSS.
        </p>
      </div>
      <div className="flex mt-12 justify-around w-64">
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

      <div>
        {client.map((post) => (
          <div key={post.slug.current}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

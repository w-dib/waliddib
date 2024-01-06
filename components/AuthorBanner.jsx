/* eslint-disable @next/next/no-img-element */
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { formatPublishedDate } from "@/utils/lib";
const AuthorBanner = ({ date }) => {
  return (
    <div className='w-full flex items-center justify-between mb-5 mt-10'>
      <div className='flex gap-2 items-center'>
        <img className='h-16 w-16' src='/bio.png' alt='images' />
        <div className='flex flex-col space-y-1'>
          <h1 className='font-bold text-xl'>Walid Dib</h1>
          <p className='font-semibold text-sm text-[#00000085]'>
            {formatPublishedDate(date)}
          </p>
        </div>
      </div>

      <div className='flex justify-between items-center gap-4'>
        <Link target='_blank' href={"https://www.linkedin.com/in/wdanieldib/"}>
          <FaLinkedinIn className='h-6 w-6' />
        </Link>
        <Link target='_blank' href={"https://twitter.com/OCdib"}>
          <FaTwitter className='h-6 w-6' />
        </Link>
      </div>
    </div>
  );
};

export default AuthorBanner;

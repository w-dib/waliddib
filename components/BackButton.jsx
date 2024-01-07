"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <div
      onClick={handleClick}
      className='my-4 border-black rounded-full border p-2 flex w-fit hover:bg-black hover:text-white cursor-pointer transition '
    >
      <FaArrowLeft className='h-6 w-6' />
    </div>
  );
};

export default BackButton;

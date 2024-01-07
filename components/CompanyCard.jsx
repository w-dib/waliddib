/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const CompanyCard = () => {
  return (
    <Link
      href={"#"}
      className='bg-[#00000008] border border-neutral-200 rounded px-3 py-4 flex items-center'
    >
      <img className='w-8 h-8' src='/callmi.svg' alt='callmi.co logo' />{" "}
      <h1>Callmi</h1>
    </Link>
  );
};

export default CompanyCard;

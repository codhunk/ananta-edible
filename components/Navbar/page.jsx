"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className=" bg-[#05422C] h-[37px] flex items-center justify-center gap-5">
        <span className="text-[14px] text-[#FFFFFFB2] font-normal tracking-wider"> LIMITED OFFER: 30% OFF. Use ANANTA30 at Checkout. </span>
        <span>23 : 15 : 00</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-16">
        
        <div className=" w-full flex items-center justify-between  h-[110px]">
        <div className="relative w-[167px] h-[62px] ">
          <button className="lg:hidden" onClick={() => setOpen(!open)} >
             ☰ 
          </button>
          <Image src={'/images/ananta_logo2.png'}
          alt="ananta_logo"
            fill
            className="object-fill"
           />
        </div>

        <div className="w-[456px] h-[48px] flex gap-3 ">
          <input type="text" placeholder="Search" className=" border border-gray-300 text-gray-500 h-full w-full rounded-full pl-5"/>
          <span className=" w-[55px] text-xl rounded-full flex items-center justify-center bg-[#17AF26]"> <CiSearch /> </span>
        </div>

        <div className="w-[270px] h-[24px] text-[#46494F] flex gap-4 items-center justify-end">
            <p className="font-normal text-[14px] tracking-wider ">Your Account</p>
            <div className="h-[15px] border border-gray-300"></div>
            <div className="text-2xl relative"><HiOutlineShoppingBag /> 
            <div className="bg-red-500 w-4 h-4 text-[10px] flex items-center justify-center text-white rounded-full absolute top-3 -right-2">0</div>
             </div>
        </div>
        </div>

      </div>


      <div className=" mt-6  w-full h-[40px] text-[16px] text-[#46494F] tracking-wider lg:flex items-center justify-center gap-5">
          <Link href={'/#'}>Shop All</Link>
          <Link href={'/#'}>Flower</Link>
          <Link href={'/#'}>Edibles</Link>
          <Link href={'/#'}>Concentrates</Link>
          <Link href={'/#'}>Mushrooms</Link>
          <Link href={'/#'}>Pramotions/Bundles</Link>
          <Link href={'/#'}>Support</Link>
          <Link href={'/#'}>Rewards</Link>
          <Link href={'/#'}>Blogs</Link>
        </div>

      {/* {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          <a className="block">Shop</a>
          <a className="block">Strains</a>
          <a className="block">Education</a>
          <a className="block">Contact</a>
        </div>
      )} */}
    </header>
  );
}



// const Navbar = () => {

//   return (
//     <h1>Navbar</h1>
//   );
// };

// export default Navbar;


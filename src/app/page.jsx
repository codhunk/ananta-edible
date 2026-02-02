"use client"
import Header from "../../components/Navbar/page";
import Hero from "../../components/Hero/page";
import ProductGrid from "../../components/ProductGrid/page";
import Weed from "../../components/weeds/page";
import HowItWorks from "../../components/HowItWork/page";
import Footer from "../../components/Footer/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className=" bg-[#F2F6F4] h-auto md:h-[356px] flex flex-col md:flex-row  items-center justify-center gap-10">
          <div className=" min-h-[172px] w-[429px] flex">
            <div className="w-[100px] h-[85px] relative ">
              <Image src={'/images/card_img1.png'} width={100} height={100} className='' />
            </div>
            <div className="w-full ml-5">
              <h1 className="text-[24px] text-black mb-4">Reliable Shipping</h1>
              <p className="text-[16px] text-[#717378]">Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
            </div>
          </div>
          <div className=" min-h-[172px] w-[429px] flex">
            <div className="w-[100px] h-[85px] relative">
              <Image src={'/images/card_img2.png'} width={100} height={100} className='' />
            </div>
            <div className="w-full ml-5">
              <h1 className="text-[24px] text-black mb-4">Reliable Shipping</h1>
              <p className="text-[16px] text-[#717378]">Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
            </div>
          </div>
          <div className=" min-h-[172px] w-[429px] flex">
            <div className="w-[100px] h-[85px] relative">
              <Image src={'/images/card_img3.png'} width={100} height={100} className='' />
            </div>
            <div className="w-full ml-5">
              <h1 className="text-[24px] text-black mb-4">Reliable Shipping</h1>
              <p className="text-[16px] text-[#717378]">Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
            </div>
          </div>
        </div>
        <ProductGrid />
        <Weed />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}



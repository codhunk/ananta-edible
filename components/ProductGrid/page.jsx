"use client"
import Image from "next/image";

import ProductCarousel from "../Carousel/page";
import { FaStar } from "react-icons/fa6";
import TestimonialCarousel from "../Testimonial/page";

export default function ProductGrid() {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[60px] text-[#1A1E26] -mb-5 font-semibold text-center ">
          BEST DISPENSARY TO BUY
        </h2>
        <h2 className="text-[64px] text-[#1A1E26]  font-semibold text-center ">
          WEED ONLINE IN INDIA
        </h2>

        {/* heading */}
        <div className="w-full h-[48px] mt-10 flex justify-between px-4">
          <button className="w-[389px] bg-[#F2F6F4] font-semibold h-full flex items-center justify-center text-[16px] text-[#05422C] border border-[#05422C] rounded-full">Best Sellers</button>
          <button className="w-[389px] h-full flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">Bundles & Promotions</button>
          <button className="w-[389px] h-full flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">On Sale</button>
        </div>


        <div className=" h-[568px] w-full mt-10 flex">
          {/* best seller card */}
          <div className=" bg-[#05422C] min-w-[379px] h-full flex flex-col items-center justify-center gap-5 rounded-3xl overflow-hidden">
            <div className="w-[213px] h-[213px] relative">
            <Image src={'/images/bestSeller_img.png'} fill className="object-cover z-4" />
            <div className=" h-[371px] w-[261px] absolute left-20 bottom-5 rotate-5 bg-[#34665466]/40"> </div>
            </div>

            <div className=" w-full text-center">
              <h1 className="text-white text-[20px]">Shop our Best Sellers</h1>
              <p className="text-[14px] max-w-[216px] mx-auto my-4">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </p>
              <button className="text-[#17AF26] text-[14px] tracking-wider mt-1"> View All </button>
            </div>
          </div>
          <ProductCarousel /> 
        </div>
        

{/* customer testimonial */}
          <div className="mt-25">
            <h2 className="text-[60px] text-[#1A1E26] my-10 font-semibold ">
          CUSTOMER TESTIMONIALS
        </h2>

        <div className=" flex">
          <div className="border border-red-500 min-w-[379px] p-10 h-[424px] bg-[#05422C] rounded-xl">
            <h1 className="text-[32px] font-semibold text-white">VOTED BEST <br/> ONLINE DISPENSARY IN INDIA</h1>
            <div className="border border-[#346654] mt-5 rounded-full"></div>
            <p className="text-[#346654] text-[30px] my-3 font-semibold">Google</p>
            <p className="text-[16px] my-2">EXELLENCET</p>

            <div className=" text-yellow-500 text-[20px] flex">
              <div className=" flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              </div>
              <div className="border border-[#346654] h-5 mx-6"></div>
              <p className="text-white text-[16px]">on 135 Reviews</p>
            </div>

          </div>

          <TestimonialCarousel />
        </div>



          </div>


        
      </div>
    </section>
  );
}

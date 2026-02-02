"use client";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const products = [
  {
    name: 'rohit kumar',
    description: 'hello world',
    date: 'january 15 2025'
  },
  {
    name: 'rohit kumar',
    description: 'hello world',
    date: 'january 15 2025'
  },
  {
    name: 'rohit kumar',
    description: 'hello world',
    date: 'january 15 2025'
  },
  
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="relative px-6">

      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white p-2 text-gray-400 border border-gray-200 rounded-full shadow-lg"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white p-2 text-gray-400 border border-gray-200 rounded-full shadow-lg"
      >
        <FaChevronRight />
      </button>

      {/* Carousel */}
      <div ref={emblaRef} className=" grid grid-cols md:grid-cols-3 lg:grid-cols-4 overflow-hidden ">
        <div className="flex gap-6 ">

          {products.map((product, index) => (
            <div
              key={index}
              className=" min-w-[379px] h-[424px] bg-white flex flex-col items-center border border-gray-200 rounded-xl p-10"
            >

                <div className="flex w-full items-center">
                    {/* add images hare */}
                    <div className=" h-[36px] w-[36px] rounded-full bg-red-300"></div>
                    <p className="text-[#1A1E26] text-[16px] ml-4">Rohit kumar</p>
                </div>

                <div className="border w-full border-[#C8C9CB] my-8"></div>

                <div className="flex gap-1 w-full text-xl text-yellow-500">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>

                <p className="text-[16px] text-[#1A1E26] tracking-wider my-5">
                    Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.
                </p>

                <p className="text-[14px] text-[#9D9EA2] w-full mt-10">january 15, 2025</p>


              </div>
          ))}

        </div>
      </div>
    </section>
  );
}

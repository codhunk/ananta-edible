"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const products = [
  {
    category: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    rating: 4.6,
    reviews: 135,
    type: "Indica 70%",
    status: "out",
  },
  {
    category: "FLOWER",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rating: 4.6,
    reviews: 135,
    type: "Sativa 100%",
    status: "available",
  },
  {
    category: "FLOWER",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    rating: 4.6,
    reviews: 135,
    type: "Sativa 100%",
    status: "available",
  },
  {
    category: "FLOWER",
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    rating: 4.6,
    reviews: 135,
    type: "",
    price: "$60 ounce",
    status: "available",
  },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="relative px-6 ">

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
        <div className="flex gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] bg-white flex flex-col items-center"
            >
              {/* image */}
              <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                  <Image
                    src={'/images/product1_img.png'}
                    alt={'image'}
                    fill
                    className="object-cover"
                  />
                </div>

              {/* Status */}
              {/* {product.status === "out" && (
                <p className="text-xs text-gray-400 mb-2">Out Of Stock</p>
              )} */}

              {/* Category */}
              <p className="text-[14px] tracking-wide text-[#9D9EA2] mt-3 mb-2">
                {product.category}
              </p>

              {/* Title */}
              <h3 className="text-[18px] text-[#1A1E26] leading-6 font-medium mb-3 text-center">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FaStar size={14} className=" text-yellow-500 mr-1" />
                {product.rating}/5&nbsp;
                <span className="text-gray-400">
                  {product.reviews} Reviews
                </span>
              </div>

              {/* Type */}
              {product.type && (
                <p className="text-xs w-[92px] h-[28px] flex items-center justify-center bg-[#CECFD5] text-black rounded-[4px] mb-3">
                  {product.type}
                </p>
              )}

              <div className="border w-[104px] h-[24px] flex">
                  <p className="text-[16px] text-[#EB2606]">$ 80.00</p>
                  <p className="text-14px text-[#C8C9CB]">/ gram</p>
              </div>

              {/* Sizes */}
              <p className="text-xs  text-gray-500 my-4">
                28g&nbsp;&nbsp;1/2lb&nbsp;&nbsp;1/4lb
              </p>

              {/* CTA */}
              {product.status === "out" ? (
                <button
                  disabled
                  className="w-[140px] h-[40px] bg-[#17AF26] flex items-center justify-center py-2 text-[14px] text-white rounded-full cursor-not-allowed"
                >
                  Add to Cart
                </button>
              ) : (
                <button className="w-[140px] h-[40px] bg-[#17AF26] flex items-center justify-center py-2 text-[14px] rounded-full hover:bg-green-700 cursor-pointer text-white transition duration-300">
                  Add to Cart
                </button>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

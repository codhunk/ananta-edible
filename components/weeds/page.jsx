import ProductCarousel from "../Carousel/page";
import ProductGrid from "../ProductGrid/page";

export default function Weed() {
  return (
    <section className=" bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-[60px] text-[#1A1E26] font-semibold text-center ">
          CHOOSE YOUR WEED
        </h2>

        {/* heading */}
        <div className="w-full flex justify-center items-center gap-5 pb-3 border-b   px-4  my-10">
          <p className="text-[24px] text-black tracking-wide">Filter by Interest</p>
          <button className="min-w-[101px] h-[48px] px-4 bg-[#F2F6F4] font-semibold flex items-center justify-center text-[16px] text-[#05422C] border border-[#05422C] rounded-full">Best Sellers</button>
          <button className="min-w-[101px] h-[48px] px-4 flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">Bundles & Promotions</button>
          <button className="min-w-[101px] h-[48px] px-4 flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">On Sale</button>
          <button className="min-w-[101px] h-[48px] px-4 flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">On Sale</button>
          <button className="min-w-[101px] h-[48px] px-4 flex items-center justify-center text-[16px] text-[#05422C] border border-gray-200 rounded-full">On Sale</button>
        </div>

          <div className=" flex flex-col gap-15">
        <ProductCarousel />
        <ProductCarousel />
        </div>




        </div>
    </section>
  );
}


import Image from "next/image";


const instruct = [
  {
    id: 1,
    icon: '/images/ins_img1.png',
    heading: 'Create an Account',
    description: 'Sign up for a free account on our platform to get started. It only takes a minute and gives you access to our full catalog.'
  },
  {
    id: 2,
    icon: '/images/ins_img2.png',
    heading: 'Browse Our Selection',
    description: 'Explore our premium cannabis products. Use filters to find exactly what you\'re looking for by strain, type, or effect.'
  },
  {
    id: 3,
    icon: '/images/ins_img3.png',
    heading: 'Place Your Order',
    description: 'Add your desired products to cart, select your preferred shipping method, and complete your secure checkout.'
  },
  {
    id: 4,
    icon: '/images/ins_img4.png',
    heading: 'Receive Your Package',
    description: 'We ship discreetly and securely. Track your order and receive it right at your doorstep in discreet packaging.'
  }
];

export default function HowItWorks() {
  return (
    <section className=" bg-[#01100B] text-white py-23 border">
      <div className="">
        <h1 className="text-[64px] font-semibold leading-20 tracking-wider max-w-[974px] mx-auto text-center">HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER ANANTA</h1>
        <p className="text-[16px] text-[#9D9EA2] max-w-[811px] mx-auto text-center tracking-wide mt-5 ">Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.</p>
      </div>

      <div className="mt-18 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {instruct.map((item, index) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center text-center mx-auto w-[563px] p-4 md:p-6 group hover:transform hover:scale-105 transition-transform duration-300"
            >
              {/* Number Badge */}
                <div className="w-[144px] h-[144px] mx-auto relative">
                  <Image 
                    src={item.icon} 
                    fill 
                    className="object-contain" 
                    alt={`${item.heading} icon`}
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                  <span className=" absolute top-0 -left-25 w-[40px] h-[40px] bg-[#F2BC1B] flex items-center justify-center text-white rounded-full text-lg md:text-xl font-bold shadow-lg">
                  {index + 1}
                </span>
                </div>


              {/* Content */}
              <h3 className="text-xl md:text-[24px] text-white my-5 font-semibold mb-4 tracking-wide">
                {item.heading}
              </h3>
              <p className="text-[#9D9EA2] tracking-wide text-[16px] max-w-xs mx-auto">
                {item.description}
              </p>
                

            
            </div>
          ))}
        </div>

        <button className="w-[267px] h-[64px] text-white bg-[#17AF26] rounded-full flex items-center justify-center mx-auto text-[16px] mt-25 hover:bg-green-700 cursor-pointer ">Choose your Weed</button>

      </div>
    </section>
   );
 }




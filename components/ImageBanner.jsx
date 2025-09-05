"use client";

import { assets } from "@/assets/assets";
import { Flex } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";

export default function ImageBanner() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        
        {/* Text Card */}
        <div className="p-6 w-full bg-gray-100/60 rounded-2xl shadow-md transition-transform duration-500 hover:scale-105">
          <Flex direction="column" className="h-full justify-between">
            <h3 className="font-bold mb-2 text-xl md:text-2xl text-gray-800">
              High-Quality Service
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center md:text-left">
              We provide top-notch solutions tailored to your business needs with 
              professional expertise and guaranteed satisfaction.
            </p>
            <div className="mt-4 flex justify-center md:justify-end">
              <button className="bg-yellow-500 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                Order Now
              </button>
            </div>
          </Flex>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <CldImage
            src={assets.heroImg.id}
            alt="Hero Banner"
            width={assets.heroImg.w}
            height={assets.heroImg.h}
            className="object-cover w-full h-auto rounded-2xl shadow-md transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
  
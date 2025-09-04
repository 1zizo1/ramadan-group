"use client"
import { assets } from "@/assets/assets";
import {Flex } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";

export default function ImageBanner() {
  return (
   
      <div className="grid grid-cols-2 gap-3 place-items-center mx-5">
        <div className="p-6 max-w-3xl w-full bg-gray-400/20 rounded-2xl transition-transform duration-500 hover:scale-105 ">
          <Flex direction={"column"} className="">
            <h3 className="font-bold m-2 text-lg">title</h3>
            <p className="text-sm text-black-300 text-center">
              High-quality service with professional expertise.
            </p>
            <button className="mt-3 mx-2 bg-yellow-500 w-1/4 self-end text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
              Order Now
            </button>
          </Flex>
        </div>
        <div>
          <CldImage
            src={assets.heroImg.id}
            alt={"alt"}
            width={assets.heroImg.w}
            height={assets.heroImg.h}
            className="object-cover w-full h-auto transition-transform duration-500 rounded-2xl  hover:scale-105 "
          />
        </div>
      </div>

  );
}

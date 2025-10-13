"use client";

import { assets } from "@/assets/assets";
import { Flex } from "@radix-ui/themes";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function ImageBanner() {
  const t = useTranslations("ImgBanner");
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {/* Text Card */}
        <div className="p-6 w-full bg-gray-100/60 rounded-2xl shadow-md transition-transform duration-500 hover:scale-105">
          <Flex direction="column" className="h-full justify-between">
            <h3 className="font-bold mb-2 text-xl md:text-2xl text-gray-800">
              {t("Title")}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center md:text-left">
              {t("Desc")}
            </p>
            <div className="mt-4 flex justify-center md:justify-end">
              <button className="bg-blue-700 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-400 transition">
                {t("Button")}
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

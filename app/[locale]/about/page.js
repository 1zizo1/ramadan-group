'use client'
import { assets } from "@/assets/assets";
import { Text } from "@radix-ui/themes";
import TrueFocus from "@/components/TrueFocus";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
import Vision from "@/components/Vision";
import ImageBanner from "@/components/ImageBanner";

export default function About() {
  const t = useTranslations("contactCard");

  return (
    <section>
      <div className="bg-black/50 ">
        <div className=" absolute w-full p-18 m-2 flex items-center justify-center">
          <Text className="text-yellow-500 capitalize text-5xl">
            <TrueFocus
              text={t("Title")}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </Text>
        </div>
        <CldImage src={assets.dock.id}
          width={assets.dock.w}
          height={assets.dock.h}
          className="-z-10 relative h-[50vh] object-cover" alt="About ramadan group" />

      </div>
      <ImageBanner />
      <Vision />
    </section>
  )
}

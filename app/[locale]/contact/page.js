'use client'
import Cards from "@/components/Cards";
import { useTranslations } from "next-intl";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { assets } from "@/assets/assets";
import { Text } from "@radix-ui/themes";
import TrueFocus from "@/components/TrueFocus";
import { ContactForm } from "@/components/ContactForm";
import { CldImage } from "next-cloudinary";

export default function Contact() {
  const t = useTranslations("contactCard");
  const icons = [SunIcon, ImageIcon, FaceIcon, SunIcon];
  return (
    <section className="relative">
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
        <CldImage src={assets.ships.id}
          width={assets.ships.w}
          height={assets.ships.h}
          className="-z-10 relative h-[50vh] object-cover" alt="contact-us" />

      </div>
      <Cards t={t} icons={icons} />

      {/* Form */}
      <ContactForm />
    </section>
  )
}

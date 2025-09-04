'use client'
import Cards from "@/components/Cards";
import Wave from "@/components/ui/wave"
import { useTranslations } from "next-intl";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {Text } from "@radix-ui/themes";
import TrueFocus from "@/components/TrueFocus";
import { ContactForm } from "@/components/ContactForm";

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
      <Image src={assets.ships} className="-z-10 relative h-[50vh] object-cover" alt="contact-us"/>

      </div>
      <Cards t={t} icons={icons} />
      
      {/* Form */}
     <ContactForm/>
    </section>
  )
}

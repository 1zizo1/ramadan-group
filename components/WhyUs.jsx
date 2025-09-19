"use client";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import Cards from "@/components/Cards"

export default function WhyUs() {
  const t = useTranslations("serviceCard");
  const icons  = [SunIcon, ImageIcon, FaceIcon, SunIcon];

  // get members as object
  return (
    <section className="max-w-5xl mx-auto my-4">
<Cards t={t} icons={icons }/>
    </section>
  );
}

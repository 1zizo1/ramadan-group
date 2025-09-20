'use client'
import Cards from "@/components/Cards";
import { useTranslations } from "next-intl";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import { ContactForm } from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import HeadOfficeInfo from "@/components/HeadOfficeInfo";
import ContactChannels from "@/components/ContactChannels";
import BusinessInquiries from "@/components/BusinessInquiries";
import CTABanner from "@/components/ui/CTABanner";

export default function Contact() {
  const t = useTranslations("contactCard");

  const icons = [SunIcon, ImageIcon, FaceIcon, SunIcon];
  return (
    <section className="relative">
      <ContactHero />
      <HeadOfficeInfo />
      <ContactChannels />
      <BusinessInquiries />
      {/* Form */}
      <ContactForm />
      <CTABanner  />
      <Cards t={t} icons={icons} />

    </section>
  )
}

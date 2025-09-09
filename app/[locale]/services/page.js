'use client'
import ServicesGrid from "@/components/ServicesGrid";
import Heading from "@/components/ui/Heading";
import { assets } from "@/assets/assets";
import { Text } from "@radix-ui/themes";
import TrueFocus from "@/components/TrueFocus";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
import AdvantageSection from "@/components/Advantage";
import AdvantageVideo from "@/components/AdvantageVideo";
import ChartFlow from "@/components/ChartFlow";
import Quality from "@/components/Quality";
import PartnershipApproch from "@/components/PartnershipApproch";
export default function ServicesPage() {
  const exportService = useTranslations("ExprotService")
  const importService = useTranslations("ImportService")
  const partner = useTranslations("Partners")
  const heading = useTranslations("serviceHeading")
  const img = "image55_evnhiy"
  const vid = "https://res.cloudinary.com/db4f5zwsc/video/upload/v1757367829/peer_tree_z25khl.mp4"

  return (
    <main>
      <div className="bg-black/50 ">
        <div className=" absolute w-full p-18 m-2 flex items-center justify-center">
          <Text className="text-yellow-500 capitalize text-5xl">
            <TrueFocus
              text="Seamless Trade, End-to-End Solutions."
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors="black"
            />
          </Text>
        </div>
        <CldImage src={assets.container.id}
          width={assets.container.w}
          height={assets.container.h}
          className="-z-10 relative h-[50vh] object-cover" alt="About ramadan group" />

      </div>

      <div className="mx-auto px-6">
        <Heading t={heading} />
        <AdvantageSection t={exportService} img={img} />
        <AdvantageVideo t={importService} img={vid} />
        <ChartFlow />
        <ServicesGrid />
        <Quality />
        <PartnershipApproch t={partner} img={img} />
      </div>

    </main>
  );
}

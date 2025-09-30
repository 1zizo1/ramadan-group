'use client'
import Quality from '@/components/Quality'
import { useTranslations } from 'next-intl'
import TrueFocus from "@/components/TrueFocus";
import { CldImage } from "next-cloudinary";
import { Text } from "@radix-ui/themes";
import { ContactForm } from '@/components/ContactForm';
import Heading from '@/components/ui/Heading';
import FreshGrid from '@/components/ui/FreshGrid';
import AdvantageVideo from '@/components/AdvantageVideo';
import AdvantageSection from '@/components/Advantage';
import AdvantageGridImgs from '@/components/AdvantageGridImgs';

export default function Product() {
  const Qualtiy = useTranslations("QualtiyAsure")
  const veges = useTranslations("VegetablesProduct")
  const fruits = useTranslations("FruitsProduct")
  const frozen = useTranslations("FrozenProduct")
  const lights = useTranslations("LightsProduct")
  const dates = useTranslations("DatesProduct")
  const grains = useTranslations("GrainsProduct")
  const packaging = useTranslations("Packaging")
  const t = useTranslations("nav")
  const custom = useTranslations("CustomOrder")
  const vid = "https://res.cloudinary.com/db4f5zwsc/video/upload/v1757367829/peer_tree_z25khl.mp4"
  const grainsvid = "https://res.cloudinary.com/db4f5zwsc/video/upload/v1757460874/1471454_People_Business_1280x720_x0zfop.mp4"
   const vegeimg= "red-fresh-tomatoes-gathered-into-cardboaard-boxes-purchasing_fv787q"
   const dateimg= "14535_ct0iey"
   const packgevid= "https://res.cloudinary.com/db4f5zwsc/video/upload/v1757461430/5389356_Coll_wavebreak_Warehouse_1280x720_yperdd.mp4"
   const frozenImg= "top-view-arrangement-frozen-food_uzyaqh"
   const lightsimgs= [ "IMG_6399.HEIC_1_cnry9v","IMG_5965.HEIC_1_vtsuzv","IMG_5906.HEIC_jcv143","IMG_5912.HEIC_2_stgvgx"]

  return (
    <main>
      <div className="bg-black/50 ">
        <div className=" absolute w-full p-18 m-2 flex items-center justify-center">
          <Text className="text-yellow-500 capitalize text-5xl">
            <TrueFocus
              text={t("Products")}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </Text>
        </div>
        <CldImage src="colorful-collage-fruits-texture-close-up_yq5tao"
          width="7100"
          height="2400"
          className="-z-10 relative h-[50vh] object-cover" alt="About ramadan group" />
      </div>

      <FreshGrid  />
      <AdvantageSection t={veges} img={vegeimg} />
      <AdvantageVideo t={fruits} img={vid} />
      <AdvantageSection t={frozen} img={frozenImg} />
<AdvantageGridImgs t={lights} images={lightsimgs}/>
      <AdvantageVideo t={grains} img={grainsvid} />
      <AdvantageSection t={dates} img={dateimg} />
      <AdvantageVideo t={packaging} img={packgevid} />

      <Quality t={Qualtiy} />
      <Heading t={custom}/>
      <ContactForm />

    </main>
  )
}

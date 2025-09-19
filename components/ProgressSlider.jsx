export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};

import Carousel from "@/components/Carousel";
import { assets } from "@/assets/assets";

export default function ProgressSlider() {
  const items = [
    {
      img: assets.SilderImg01.id,
      w:assets.SilderImg01.w,
      h:assets.SilderImg01.h,
      buttonIcon: assets.SilderIcon01.id,
    },
    {
      img: assets.SilderImg02.id,
      w:assets.SilderImg02.w,
      h:assets.SilderImg02.h,
      buttonIcon: assets.SilderIcon02.id,
    },
    {
      img: assets.SilderImg03.id,
      w:assets.SilderImg03.w,
      h:assets.SilderImg03.h,
      buttonIcon: assets.SilderIcon03.id,
    },
    {
      img: assets.SilderImg04.id,
      w:assets.SilderImg04.w,
      h:assets.SilderImg04.h,
      buttonIcon: assets.SilderIcon04.id,
    },

  ];

  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
          <div className="flex justify-center">
            <Carousel items={items} />
          </div>
        </div>
      </main>

      
    </>
  );
}

export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};

import Carousel from "@/components/Carousel";
// Import images/icons from assets folder
// import SilderImg01 from "@/assets/ps-image-01.png";
// import SilderImg02 from "@/assets/ps-image-02.png";
// import SilderImg03 from "@/assets/ps-image-03.png";
// import SilderImg04 from "@/assets/ps-image-04.png";
// import SilderIcon01 from "@/assets/ps-icon-01.svg";
// import SilderIcon02 from "@/assets/ps-icon-02.svg";
// import SilderIcon03 from "@/assets/ps-icon-03.svg";
// import SilderIcon04 from "@/assets/ps-icon-04.svg";
import { assets } from "@/assets/assets";

export default function ProgressSlider() {
  const items = [
    {
      img: assets.SilderImg01.id,
      w:assets.SilderImg01.w,
      h:assets.SilderImg01.h,
      desc: "Omnichannel",
      buttonIcon: assets.SilderIcon01.id,
    },
    {
      img: assets.SilderImg02.id,
      w:assets.SilderImg02.w,
      h:assets.SilderImg02.h,
      desc: "Omnichannel",
      buttonIcon: assets.SilderIcon02.id,
    },
    {
      img: assets.SilderImg03.id,
      w:assets.SilderImg03.w,
      h:assets.SilderImg03.h,
      desc: "Omnichannel",
      buttonIcon: assets.SilderIcon03.id,
    },
    {
      img: assets.SilderImg04.id,
      w:assets.SilderImg04.w,
      h:assets.SilderImg04.h,
      desc: "Omnichannel",
      buttonIcon: assets.SilderIcon04.id,
    },
    // {
    //   img: SilderImg03,
    //   desc: "Interpolate",
    //   buttonIcon: SilderIcon03,
    // },
    // {
    //   img: SilderImg04,
    //   desc: "Enriched",
    //   buttonIcon: SilderIcon04,
    // },
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

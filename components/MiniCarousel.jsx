"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
export default function MiniCarousel() {
  const t = useTranslations("MiniCarousel")
  const partners = [
    { name: "EU", logo: "18166_m3wqbl" },
    { name: "China", logo: "IMG-20250921-WA0008_rstzn0" },
    { name: "USA", logo: "flag-Stars-and-Stripes-May-1-1795_yrac2x" },
    { name: "Saudi Arabia", logo: "Flag_of_Saudi_Arabia.svg_qlknhd" },
    { name: "India", logo: "Flag_of_India.svg_wtkw6w" },
    { name: "UAE", logo: "IMG-20250921-WA0007_ayait8" },
    { name: "Turkey", logo: "Flag_of_Turkey.svg_ktzuj6" },
    { name: "South africa", logo: "Flag_of_South_Africa.svg_xpbvp3" },
  ];

  return (
    <section className="py-12 my-6 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-sm text-yellow-600 font-semibold uppercase">
          {t("name")}
        </h3>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          {t("head")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("desc")}
        </p>

        {/* Carousel container */}
        <div className="relative overflow-hidden mt-8">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {/* Duplicate for infinite loop */}
            {[...partners, ...partners].map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-28 h-20 md:w-32 md:h-24 flex items-center justify-center bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <CldImage
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

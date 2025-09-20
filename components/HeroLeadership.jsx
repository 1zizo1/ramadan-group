"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function HeroLeadership() {
  const t = useTranslations("HeroLeadership")
  const leaders = [
    {
      name: "Ahmed Abd ellaziz",
      role: "CTO",
      img: "IMG_20250919_200802_nnbllm",
    },
    {
      name: "Atef Ramadan",
      role: "CEO",
      img: "Picsart_25-09-19_19-50-43-713_eqe1hg",
    },

    { name: "Salah Allam", role: "COO", img: "IMG_20250919_200848_kox1y2" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <CldImage
          src="handshake_t8wqdp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-300"
        >
          {t("desc")}
          
        </motion.p>

        {/* Leaders Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              className="group relative rounded-lg overflow-hidden shadow-lg"
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] w-full">
                <CldImage
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-3">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  {leader.name}
                </h3>
                <p className="text-yellow-400 font-semibold text-sm sm:text-base">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

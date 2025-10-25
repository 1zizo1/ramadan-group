"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function CEOSpotlight() {
  const t = useTranslations("CEOSpotlight");
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <CldImage
          src="blurred-silhouette-business-man_l3i1nq" // replace with a professional/abstract bg
          alt="CEO Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* CEO Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-700"
        >
          <CldImage
            src="IMG-20251024-WA0018_mfkbg3" // replace with Atef Ramadan's photo
            alt="Atef Ramadan - CEO"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CEO Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
            {t("title")}
          </h2>
          <p className="mt-2 text-xl text-blue-700 font-semibold">
            {t("name")}
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            {t("desc1")}
            <span className="font-semibold"> {t("highlight1")}</span>
            {t("desc2")} <span className="font-semibold">{t("logistics")}</span> {t("highlight2")}
            <span className="font-semibold">{t("highlight3")}</span>,
            <span className="font-semibold">{t("highlight4")}</span>{t("desc4")}
            <span className="font-semibold"> {t("highlight5")}</span> {t("desc5")}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            {t("btn")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

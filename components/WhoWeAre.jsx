"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";
export default function WhoWeAre() {
const t= useTranslations("WhoWeAre")
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Accent (optional decorative) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-yellow-300 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <CldImage
            src="Picture4_cjuewq"
            alt="Who We Are"
            width="1200"
            height="800"
            crop="fill"
            gravity="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            {t("At")}
            <span className="font-semibold text-yellow-600">{t("high")}</span>,
            {t("desc")}
            <span className="font-semibold">{t("low")}</span>,{t("restDesc")}
          </p>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                ✓
              </span>
              {t("0")}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                ✓
              </span>
              {t("1")}
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
                ✓
              </span>
              {t("2")}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

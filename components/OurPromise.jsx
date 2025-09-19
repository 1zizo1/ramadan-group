"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useTranslations } from "next-intl";

export default function OurPromise() {
const t = useTranslations("OurPromise")
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <CldImage
        src="port-1845350_1280_bhqrou" // 🔄 replace with your Cloudinary image ID
        alt="Cargo Ship"
        fill
        className="object-cover"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
         {t("title")}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed">
          {t("desc")}
        </p>

        <motion.a
          href="/contact"
          className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         {t("btn")}
        </motion.a>
      </motion.div>
    </section>
  );
}
